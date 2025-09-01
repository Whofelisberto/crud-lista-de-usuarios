import express from 'express';
import cors from 'cors'; 
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);


const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server rodando ${PORT}`);
});