import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/cadastro', { name, email, password })
      alert('Usuário cadastrado com sucesso!')
      setName('')
      setEmail('')
      setPassword('')
      navigate('/login')


    } catch (error) {
      console.error(error)
      alert('Erro ao cadastrar usuário')
    }
  }

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 border rounded w-full'>
      <form onSubmit={handleSubmit} className='w-full'>
        <h2 className='text-2xl font-semibold text-center mt-5 uppercase'>Cadastro</h2>
        <div className='flex flex-col space-y-2 mt-5 w-full'>
          <input
            className='border px-3 py-2 rounded w-full'
            type="text"
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='border px-3 py-2 rounded w-full'
            type="email"
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='border px-3 py-2 rounded w-full'
            type="password"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5 hover:bg-blue-600 transition-colors w-full'>
          Criar Conta
        </button>
        <Link to="/login">
          <p className='text-center mt-3 text-blue-600 font-semibold'>Já tem conta? Faça login</p>
        </Link>
      </form>
    </div>
  )
}