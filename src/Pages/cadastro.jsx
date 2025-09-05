import React from 'react'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import '../assets/Componets.styles/Cadastro.css'
import carpinteiro from '../assets/carpinteiro.png'
import { Link, useNavigate } from 'react-router-dom'

const Cadastro = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('') 
  const [senha, setSenha] = React.useState('')   
  const [confirmarSenha, setConfirmarSenha] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')

  const navigate = useNavigate()

  const handleCadastro = (e) => {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.")
      return
    } else if(!nome || !email || !senha || !confirmarSenha) {
      setMensagem("Por favor, preencha todos os campos.")
      return
    }

    
    console.log("Dados enviados:", { nome, email, senha })
    setMensagem("Cadastrado com sucesso!")

    setTimeout(() => {
      navigate("/home")
  }, 1000); // Redireciona após 2 segundos
  }

  return (
    <div className="cadastro">
      <div className="cadastro-img">
        <img className='carp-img' src={carpinteiro} alt="" />
      </div>

      <div className="form">
        <form 
          style={{
            background: "#f5f5f5",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            width: "100%"
          }} 
          onSubmit={handleCadastro}
        >
          <div className="form-content">
            <h2>Bicos</h2>
            <h3>Bem vindo a bicos</h3>
            <p>Digite seus dados para se cadastrar.</p>
          </div>

          <Input
            type="text"
            placeholder="Digite seu nome :"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            name="nome"
          />

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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            name="senha"
          />

          <Input
            type="password"
            placeholder="Confirme sua senha :"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            name="confirmarSenha"
          />
          
          <Button type="submit">Cadastrar</Button>

          {mensagem && <p>{mensagem}</p>}
        </form>
      </div>
    </div>
  )
}

export default Cadastro
