import React from 'react'
import '../assets/Componets.styles/Input.css'

const Input = ({type = Text, placeholder, value, onChange, name}) => {
    return (
        <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="input-field"
      />
    </div>
    )
}

export default Input