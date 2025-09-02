# 📌 CRUD Lista de Usuários

Este projeto é um **CRUD (Create, Read, Update, Delete)** de usuários, desenvolvido em uma stack **full-stack JavaScript** moderna.  
Ele inclui autenticação, gerenciamento de usuários e integração entre **front-end** e **back-end**.

---

## 🚀 Tecnologias utilizadas

### 🔹 Back-end
- **Node.js** – Ambiente de execução  
- **Express (v5)** – Criação da API REST  
- **CORS** – Permitir comunicação com o front-end  
- **Prisma** – ORM para interação com o banco de dados (**PostgreSQL**)  
- **Bcrypt / BcryptJS** – Hash de senhas para autenticação segura  
- **JWT (JsonWebToken)** – Autenticação via tokens  

### 🔹 Front-end
- **React (v19)** – Biblioteca para construção da interface  
- **Vite** – Bundler rápido para desenvolvimento  
- **React Router DOM (v7)** – Navegação entre páginas  
- **Axios** – Comunicação com a API  
- **TailwindCSS (v4)** – Estilização moderna e responsiva  
- **Lucide / Lucide-React** – Ícones minimalistas  

---

## 📂 Estrutura
- `back-end/` → API com Express + Prisma + JWT  
- `front-end/` → Interface React + Tailwind + Axios  

---

## ⚙️ Funcionalidades
- Cadastro de usuários  
- Listagem de usuários 
- Exclusão de usuários  
- Autenticação com JWT (login seguro)  

---

## 🗄️ Banco de dados
O projeto utiliza **PostgreSQL** integrado com **Prisma ORM** para modelagem e comunicação.  

---

## 📦 Como rodar o projeto

### 🔹 Back-end
```bash
npm install
node --watch server.js
vai rodar na porta http://localhost:3000
```

### 🔹 Front-End

```bash
npm install
npm run dev
vai rodar na porta http://localhost:5173 padrão de projeto vite
```
