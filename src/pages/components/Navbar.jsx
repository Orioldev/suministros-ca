import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false)
    const onMenuMostrar = () => setMostrarMenu(!mostrarMenu);


  return (
   <>
    <div className='nav-container'>
        <nav className='nav-vendedor'>
            <div className='logo-nav'>
                <img height="40px" src={Logo} alt="logo" />
                <h4>Import Suministros F&P</h4>
            </div>
            <div className='enlaces-nav'>
                <ul>
                   <Link className='nav-link' to="/vendedor"><li>Productos</li></Link>  
                   <Link className='nav-link' to="/cobranzas" ><li>Cobranzas <span>5</span> </li></Link>  
                   <Link className='nav-link' to="/historial"><li>Historial</li></Link>
                    <div className='info-user-nav'>
                        <span>Vendedor</span>
                        <button type='button'>Logout</button>
                    </div>
                </ul>
           
            </div>
          
        </nav>
        {
         mostrarMenu?(<IoMdClose className='nav-menu-boton' onClick={onMenuMostrar}/>)
                    :(<TiThMenu className='nav-menu-boton' onClick={onMenuMostrar} />)   

        }
    </div>
    <div className={`query-nav ${mostrarMenu ? { display: "block" } : { display: "none" }}`}
         style={{ display: mostrarMenu ? "block" : "none" }}
     >   
        <ul>
            <Link className='nav-link' to="/vendedor"><li>Productos</li></Link>  
            <Link className='nav-link' to="/cobranzas" ><li>Cobranzas <span>5</span> </li></Link>  
            <Link className='nav-link' to="/historial"><li>Historial</li></Link>
                <div className='info-user-nav'>
                    <span>Vendedor</span>
                    <button type='button'>Logout</button>
                </div>
        </ul>
    </div>
   </>
  )
}
