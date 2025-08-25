 import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import '../assets/Componets.styles/Detalhes.css'
 
 const Detalhes = () => {
  
   return (

    <>
    <Header/>
    <div className="details">
      <div className="details-container">
        <div className="details-content">
          <h1>Detalhe do Pedido </h1>
          <h2>Instalação de Tv</h2>

          <div className="details-item">
            <span className="item-label">Nome</span>
            <span className="item-value">Joel Miller</span>
          </div>

          <div className="details-item">
            <span className="item-label">Telefone</span>
            <span className="item-value">15997000000</span>
          </div>

          <div className="details-item">
            <span className="item-label">Endereço</span>
            <span className="item-value">JacksonVille</span>
          </div>

          <div className="details-item">
            <span className="item-label">Tipo de Serviço</span>
            <span className="item-value">Instalação</span>
          </div>

          <div className="details-item">
            <span className="item-label">Data</span>
            <span className="item-value">7 de abril</span>
          </div>

          <div className="details-item">
            <span className="item-label">Horário preferencial</span>
            <span className="item-value">08:00</span>
          </div>

          

          
        </div>

        <div className="details-desc">
          <div className="desc-container">
            <h2>Descrição</h2>
            <div className="desc-div"></div>
          </div>

          <div className="desc-container">
            <h2>Foto(opcional)</h2>
            <div className="desc-div"></div>
            

          </div>
          <div className="details-buttons">
        <button className='details-green'>Marcar como concluído</button>
        <button className='details-red'>Cancelar pedido</button>
       </div>
        </div>

    
       


      </div>

      

      

    </div>
    <Footer />
    </>
     
   )
 }
 
 export default Detalhes