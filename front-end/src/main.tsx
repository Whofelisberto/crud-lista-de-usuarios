import { BrowserRouter, Routes , Route } from 'react-router'
import Login from './Login'
import Cadastro from './Cadastro'
import Lista from './Lista'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/login' element={<Login />} /> 
    <Route path='/cadastro' element={<Cadastro />} /> 
     <Route path='/listar-usuarios' element={<Lista />} /> 
    </Routes>
  </BrowserRouter>,
)
