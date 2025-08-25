import React from 'react'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

const Servicos = () => {
const [nome, setNome] = React.useState('')
const[telefone, setTelefone] = React.useState('') 
const [tipoServico, setTipoServico] = React.useState('')
const[horario, setHorario] = React.useState('')
const [descricao, setDescricao] = React.useState('')
const [foto, setFoto] = React.useState('')
const [button, setButton] = React.useState('')

  return (

    <>
    <Header/>
   <form style={{background: "#f5f5f5", padding: "0", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh"}}>

    <Input  
    type={nome}
    placeholder="Digite seu nome :"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    name="nome" />
    
    <Input
    type={telefone}
    placeholder="Digite seu telefone :"
    value={telefone}
    onChange={(e) => setTelefone(e.target.value)}
    name="telefone" />

    <Input
    type={tipoServico}
    placeholder={"Tipo de serviço :"}
    value={tipoServico}
    onChange={(e) => setTipoServico(e.target.value)}
    name="tipoServico" />

    <Input
    type={horario}  
    placeholder={"Horário do serviço :"}
    value={horario}
    onChange={(e) => setHorario(e.target.value)}
    name="horario" />

    <Input
    type={descricao}
    placeholder={"Descrição :"}
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
    name="descricao" />

    <Input
    type={foto}
    placeholder={"(opcinal) adicione fotos :"}
    value={foto}
    onChange={(e) => setFoto(e.target.value)}
    name="foto" />

    <Button
      type={button}
      value={"Enviar solicitação"}
      onClick={() => setButton('enviar')}
      name={"enviar"} />


   </form>

    <Footer />

   </>
  )
}

export default Servicos