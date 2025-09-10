import React from 'react'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import carpinteiro from '../assets/carpinteiro.png'
import { useNavigate } from 'react-router-dom'
import '../assets/Componets.styles/Cadastro.css'

const Cadastro = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('') 
  const [senha, setSenha] = React.useState('')   
  const [confirmarSenha, setConfirmarSenha] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')

  const navigate = useNavigate()

  const handleCadastro = (e) => {
    e.preventDefault()

    if (!nome || !email || !senha || !confirmarSenha) {
      setMensagem("Por favor, preencha todos os campos.")
      return
    }

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.")
      return
    }

    // Busca usuários já cadastrados no localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    // Verifica se já existe usuário com o mesmo email
    const existe = usuarios.find((user) => user.email === email)
    if (existe) {
      setMensagem("Já existe uma conta com esse email.")
      return
    }

    // Cria novo usuário
    const novoUsuario = { id: Date.now(), nome, email, senha }

    // Adiciona no array
    usuarios.push(novoUsuario)

    // Salva no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    setMensagem("Cadastrado com sucesso!")

    // Redireciona após 1s
    setTimeout(() => {
      navigate("/home")
    }, 1000)
  }

  return (
    <div className="cadastro">
      <div className="cadastro-img">
        <img className='carp-img' src={carpinteiro} alt="Cadastro" />
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
            <h3>Bem-vindo ao Bicos</h3>
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
