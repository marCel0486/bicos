import React from 'react'
import Input from '../Componets/Input'
import { useState } from 'react'
import Button from '../Componets/Button'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'  
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [button, setButton] = useState('')
  return (
    <>
    <Header/>
      <form style={{background: "#f5f5f5", padding: "0", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>



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

          <Button
          value={"Login"}
          onClick={() => setButton('login')}   
          name={"login"} />



      </form>
<Footer />
</>
   
    
  )
}

export default Login