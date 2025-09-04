import React from 'react'
import '../assets/Componets.styles/Button.css'  

const Button = ({  children, onClick, name, type = "button" }) => {
  return (
    <div className='button-whaper'>
      <button
        
      type={type}
      onClick={onClick}
      name={name}
      className="button"
      >
        {children}
      </button>
    </div>
  )
}

export default Button