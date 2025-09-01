import { useEffect, useState } from "react"
import { ArchiveX } from 'lucide-react';
import api from "../services/api"

export default function ListarUsuarios() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          console.error("Token não encontrado no localStorage")
          return
        }
        const { data } = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` }
        })
        setUsers(data)

      } catch (error) {
        console.error("Erro ao listar usuários:", error)
      }
    }
    fetchUsers()
  }, [])

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token")
      if(!token) {
      console.error("Token não encontrado no localStorage")
      return
      }
      const { data } = await api.delete(`/deletar-usuario/${id}`, {
        headers: {Authorization: `Barear ${token}`}
      });
      alert(data.message)  
      setUsers(users.filter((user: any) => user.id !== id))
    } catch (error) {
      console.error("Erro ao deletar usuário:", error)
    }
  }

  return (
    <div>
      <nav className="bg-blue-500 p-3 text-center text-white font-semibold">Listar Usuarios</nav>
    <div className="container mx-auto border border-gray-700 p-6 m-10 rounded mt-10 max-w-lg">
      <h2 className="text-2xl text-center font-semibold mb-6 text-gray-800">Listar Usuários</h2>
      <ul className="space-y-4"> 
        {users.length > 0 ? (
          users.map((user:any) => (
            <li className="border rounded bg-gray-300 p-2" key={user.id}>
              <div className="flex justify-between items-center">
              <p className="font-semibold">ID: {user.id}</p>
              <p className="font-semibold">Nome: {user.name}</p>
              <p className="font-semibold">Email: {user.email}</p>
              <ArchiveX 
              className="text-red-600 cursor-pointer hover:text-red-800"
               onClick={() => handleDelete(user.id)}/>
                </div>
            </li>
            
          ))
        ) : (
          <li>Nenhum usuário encontrado</li>
        )}
      </ul>
    </div>
    </div>
  )
}
