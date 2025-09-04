import React from 'react'
import Header from '../Componets/Header'
import '../assets/Componets.styles/Home.css'
import consertos from '../assets/consertos.svg'
import assistencia from '../assets/assistencia.svg'
import transportes from '../assets/transportes.svg'
import domesticos  from '../assets/domesticos.svg'
import moda from '../assets/moda.svg' 
import Button from '../Componets/Button'
import Footer from '../Componets/Footer'


const Home = () => {
  return (
    <>
    <Header />

    <div className="types">
      <div className="consertos">

          <div className="type-container">
            <div className="img-container"><img src={consertos} alt="" /></div>
          </div>
          <p>consertos 
          <br />& 
          <br />reparos</p>
        </div>

      <div className="assistencia">
          <div className="type-container">
            <div className="img-container"><img src={assistencia} alt="" /></div>
          </div>
          <p>Assistência 
          <br />técnica</p>
      </div>
      <div className="trasportes">
        <div className="type-container">
            <div className="img-container"><img src={transportes} alt="" /></div>
          </div>
          <p>Transportes <br />
          &
          <br />mudanças</p>
      </div>
      <div className="domesticos">
        <div className="type-container">
            <div className="img-container"><img src={domesticos} alt="" /></div>
          </div>
          <p>Serviços 
          <br />domésticos</p>
      </div>
      <div className="moda">
        <div className="type-container">
            <div className="img-container"><img src={moda} alt="" /></div>
          </div>
          <p>Moda <br />
          &
          <br />beleza</p>
      </div>
    </div>


    <div className="home-container">
      <div className="home-text">
        
        <h1>Precisando de <br />
        uma mão hoje?</h1>

        <p>
          Na Bicos, você encontra profissionais confiáveis 
para resolver qualquer tarefa do dia a dia 
de instalação de TV a mudanças.
        </p>

        <Button
        className="button-solicitar"
        type="button"
        value="Solicite um serviço"
        onClick={() => console.log('Solicitar serviço')}
        name="solicitar-serviço"
        >Solicite um serviço</Button>
        
      </div>

      
        
          
    </div>

    <div className="home-content">
        <h1>Encontre profissionais locais 
para serviços rápidos e confiáveis</h1>
<p>Conectamos você a prestadores de serviços prontos para te ajudar com tarefas do dia a dia, como instalações, consertos, mudanças e muito mais. Tudo de forma prática, segura e sem complicações.</p>
        <Button
        type="button"
        value="Ver serviços"
        onClick={() => console.log('Ver serviços')} 
        name="ver-serviços"
        >Ver serviços</Button>
      </div>

      <div className="home-example">
        <div className="content-example">

          <h2>Exemplo de serviço</h2>
          <p>Cidade, Rua exemplo, 123</p>
          <p>Horário marcado, 16:00, 07 de junho</p>
          
        </div>

        <div className="img-example">
          <h3>Foto do serviço</h3>
          <div className="div-image-example"></div>
          </div>


      </div>

       <div className="buttons-example">
            <button>Pendente</button>
            <button>Em andamento</button>
            <button> Concluído</button>
          </div>

          <Footer />
    </>
  )
}

export default Home