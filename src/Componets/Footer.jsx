import React from 'react'
import '../assets/Componets.styles/Footer.css'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'
import whatsapp from '../assets/whatsapp.svg'


const Footer = () => {
  return (
    <>
    <div className="footer">
        
            <div className="footer-content">
                <p>© 2023 Bicos. Todos os direitos reservados.</p>
            </div>
            
            <div className="social-medias">
               
               <a href=""><img src={instagram} alt="" /></a>
               <a href=""><img src={tiktok} alt="" /></a>
               <a href=""><img src={whatsapp} alt="" /></a>
                
            </div>
    </div>
    </>
  )
}

export default Footer