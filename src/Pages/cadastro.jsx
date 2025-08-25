import React from 'react'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import '../assets/Componets.styles/Cadastro.css'
import carpinteiro from '../assets/carpinteiro.png'
import { Link } from 'react-router-dom'

const cadastro = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('') 
  const [senha, setSenha] = React.useState('')   
  const [confirmarSenha, setConfirmarSenha] = React.useState('')
  const [button, setButton] = React.useState('')
  return (

    <>

    <div className="cadastro">
      <div className="cadastro-img">
        <img className='carp-img' src={carpinteiro} alt="" />
      </div>

      <div className="form">
        
        <form style={{background: "#f5f5f5", padding: "0", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20px", width: "100%"  }}>
          <div className="form-content">
         <h2>Bicos</h2>
         <h3>Bem vindo a bicos</h3>
         <p>Digite seus dados 
para se cadastrar.</p>
        </div>
          <Input
        
            type="text"
            placeholder="Digite seu nome :"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            name="nome"
        
            />
            <Input
            type={email}
            placeholder="Digite seu email :"
            onChange={(e) => setEmail(e.target.value)}
            name="email"/>
            <Input
            type={senha}
            placeholder={"Digite sua senha :"}
            onChange={(e) => setSenha(e.target.value)}
            name="senha" />
            <Input
            type={confirmarSenha}
            placeholder={"confirme sua senha :"}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            name="confirmar senha"/>
            <Button
              type={button}
              value={"Login"}
              onClick={() => setButton('login')}
              name={"login"} 
              
            />

            <Link to={"/"}> back </Link>
        
        
        </form>
      </div>
    </div>



    </>
  )
}

export default cadastro