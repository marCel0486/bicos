import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'  
import '../assets/Componets.styles/Pedidos.css'
import Input from '../Componets/Input'

const Pedidos = () => {
  return (
    <>
    <Header/>
    <div className="pedidos">
      <div className="pedidos-container">
        <h1>Pedidos de serviço</h1>
        <Input
        type={"search"}
        placeholder={"Pesquisar pedidos"}
        className={"search-input"}
        />

        <div className="pedidos-content">
          <div className="state-container">
            <div className="state">
              <p>Todos</p>
            </div>
            <div className="state">
              <p>Em andamento</p>
            </div>
            <div className="state">
              <p>Concluídos</p>
            </div>
            <div className="state">
              <p>Cancelados</p>
            </div>
          </div>


          <div className="pedidos-visual">
            <div className="pedido">
              <div className="pedido-info">
                <h3>Conserto de bicicleta</h3> 
                <span>
                  Em andamento
                </span>
                <br />
                <button className="view-details">Ver </button>
              </div>
              
            </div>

            <div className="pedido">
              <div className="pedido-info">
                <h3>Assistência técnica</h3> 
                <span>
                  Concluído
                </span>
                <br />
                <button className="view-details">Ver </button>
              </div>
              
            </div>

           
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
    
  )
}

export default Pedidos