import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/Componets.styles/Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className='bicos-logo'>
        <div className="logo"></div>
        <h1 className='header-h1'>Bicos</h1>
      </div>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/cadastro" onClick={() => setMenuOpen(false)}>Cadastro</Link>
        <Link to="/status" onClick={() => setMenuOpen(false)}>Status</Link>
        <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
        <Link to="/detalhes" onClick={() => setMenuOpen(false)}>Detalhes</Link>
        <Link to="/pedidos" onClick={() => setMenuOpen(false)}>Pedidos</Link>
      </nav>
    </header>
  )
}

export default Header