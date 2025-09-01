import express from 'express';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma/index.js'
import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

const prisma = new PrismaClient();
const router = express.Router();
router.post('/cadastro', async (req, res) => {

  try {
  const user = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(user.password, salt);

  const userDB = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: hashpassword,
    },
  });
  res.status(201).json(userDB);
} catch (err) {
  res.status(500).json({ message: "Erro ao cadastrar usuário" });
}
});

router.post('/login', async (req , res) => {
  try {
    const userInfo = req.body;

    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    })

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
   
    const validoPassword = await bcrypt.compare(userInfo.password, user.password);
    if (!validoPassword) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });

    
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
})

router.delete('/deletar-usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete ({
      where: { id: Number(id) }
    });

    return res.status(200).json({ 
      message: "Usuário deletado com sucesso", 
      user });

  } catch (err) {
    res.status(500).json({ message: "Erro ao deletar usuário" });
  }
})

export default router;