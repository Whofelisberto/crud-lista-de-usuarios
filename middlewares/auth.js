import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req , res , next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }
  try {
    const decoded = jsonwebtoken.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.user = decoded
    next();

  } catch (err) 
  {
    res.status(401).json({ message: "Token inválido." });
  }
};

export default auth;