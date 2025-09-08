import React, { use } from 'react'
import Input from '../Componets/Input'
import { useState } from 'react'
import Button from '../Componets/Button'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'  
import carpinteiro from '../assets/carpinteiro.png'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/Componets.styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [button, setButton] = useState('')
  const [mensagem, setMensagem] = useState('')

  const navigate = useNavigate()

  const handleLogin =  (e) => {



    if(!email || !password) {
      setMensagem("Por favor, preencha todos os campos.")
      return
    }

    e.preventDefault()
    console.log("Dados de login:", { email, password })
    setMensagem("Login realizado com sucesso!")

    setTimeout(() => {
      navigate("/home")
  }, 1000); // Redireciona após 2 segundos
  }
  return (
   
    
          <div className="login">
            <div className="login-img">
              <img className='carp-img' src={carpinteiro} alt="" />
            </div>
                
                <div className="form">
                  
                    <form style={{background: "#f5f5f5",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            width: "100%"}}>
                              <div className="form-content">
                                <h2>Bicos</h2>
                                <h3>Bem vindo a bicos</h3>
                                <p>Use suas informações do login 
                              ou faça seu cadastro. </p>
                              </div>
                              <Input
                              Type={"email"}
                              placeholder={"Digite seu email :"}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              name={"email"}
                              />
                              <Input
                              type={password}
                              placeholder={"Digite sua senha :"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              name={"senha"}/>
                              <Button type={"submit"} onClick={handleLogin} >
                                Entrar
                              </Button>
                              {mensagem && <p className='mensagem'>{mensagem}</p>}
                              <Link to="/" className='cadastro-link'>Ainda não tem uma conta? Cadastre-se</Link>
                    </form>
                </div>
          </div>


    
  )
}

export default Login