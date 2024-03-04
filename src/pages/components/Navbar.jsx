import React from 'react'
import Logo from "../../assets/logo.png"

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='nav-vendedor'>
            <div className='logo-nav'>
                <img height="40px" src={Logo} alt="logo" />
                <h4>Import Suministros F&P</h4>
            </div>
            <div className='enlaces-nav'>
                <ul>
                    <li>Productos</li>
                    <li>Cobranzas</li>
                    <li>Historial</li>
                </ul>
            </div>
            <div className='info-user-nav'>
                <span>Vendedor</span>
                <button type='button'>Logout</button>
            </div>
        </nav>
    </div>
  )
}
