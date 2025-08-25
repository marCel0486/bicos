import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login' 
import Cadastro from './Pages/cadastro' 
import Status from './Pages/Status'
import Servicos from './Pages/Servicos'

import './App.css'       
import Detalhes from './Pages/Detalhes'
import Pedidos from './Pages/Pedidos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/status" element={<Status/>} />
      <Route path="/servicos" element={<Servicos/>} />
      <Route path="/detalhes" element={<Detalhes/>} />
      <Route path="/pedidos" element={<Pedidos/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
