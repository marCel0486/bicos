import React from 'react'
import '../assets/Componets.styles/Button.css'  

const Button = ({  value, onClick, name}) => {
  return (
    <div className='button-whaper'>
      <button
        
        onClick={onClick}
        name={name}
        className="button"
      >
        {value}
      </button>
    </div>
  )
}

export default Button