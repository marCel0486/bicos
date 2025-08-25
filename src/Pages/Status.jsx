import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import '../assets/Componets.styles/Status.css'

const Status = () => {
  return (
    <>
    <Header/>
    <div className="status">
      <div className="status-container">

        <div className="data-status">
          <h1>Status do pedido </h1>
          <div className="status-item">
            <h2>Tipo de serviço</h2>
            <span>Instalação de TV</span>
          </div>
          <div className="status-item">
            <h2>Nome</h2>
            <span>Ellie</span>
          </div>
          <div className="status-item">
            <h2>Endereço</h2>
            <span>Santa Monica 123</span>
          </div>
          <div className="status-item">
            <h2>Horário comercial </h2>
            <span>15:00 . 10 de julho</span>
          </div>
        </div>
         <div className="responsive-status">
          <div className="status-job">
            <p>Pendente</p>
          </div>
         </div>
      </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Status