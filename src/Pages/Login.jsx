import React, { useState } from 'react'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import carpinteiro from '../assets/carpinteiro.png'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/Componets.styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mensagem, setMensagem] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setMensagem('Por favor, preencha todos os campos.')
      return
    }

    try {
      // Busca os dados do arquivo JSON na pasta public
      const response = await fetch('/data.json')
      const users = await response.json()

      // Verifica se existe usuário com email e senha informados
      const userFound = users.find(
        (user) => user.email === email && user.password === password
      )

      if (userFound) {
        setMensagem('Login realizado com sucesso!')

        // Redireciona após 1s
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      } else {
        setMensagem('Email ou senha incorretos.')
      }
    } catch (error) {
      console.error('Erro ao acessar o banco JSON:', error)
      setMensagem('Erro no servidor. Tente novamente.')
    }
  }

  return (
    <div className="login">
      <div className="login-img">
        <img className="carp-img" src={carpinteiro} alt="Carpinteiro" />
      </div>

      <div className="form">
        <form
          style={{
            background: '#f5f5f5',
            padding: '0',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            width: '100%',
          }}
          onSubmit={handleLogin}
        >
          <div className="form-content">
            <h2>Bicos</h2>
            <h3>Bem vindo ao Bicos</h3>
            <p>Use suas informações de login ou faça seu cadastro.</p>
          </div>

          <Input
            type="email"
            placeholder="Digite seu email :"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <Input
            type="password"
            placeholder="Digite sua senha :"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
          />

          <Button type="submit">Entrar</Button>

          {mensagem && <p className="mensagem">{mensagem}</p>}

          <Link to="/cadastro" className="cadastro-link">
            Ainda não tem uma conta? Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
