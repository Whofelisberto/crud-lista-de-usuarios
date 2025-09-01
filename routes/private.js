import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js'

const router = express.Router();
const prisma = new PrismaClient();

router.get('/listar-usuarios', async (_req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);

  } catch (err) {
    res.status(500).json({ message: "Erro ao listar usuários" });
  }
});

export default router;