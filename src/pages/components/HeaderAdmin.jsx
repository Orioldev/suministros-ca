import React, { useState } from 'react'
import Logo from "C:/Users/bug_code/Documents/PROYECTOS/REACT/suministros-ca/src/assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export const HeaderAdmin = () => {
    const [mostrarMenuAdmin, setMostrarMenuAdmin] = useState(false)
    const onMenuMostrarAdmin = () => setMostrarMenuAdmin(!mostrarMenuAdmin);


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
                   <Link className='nav-link' to="/admin/productos"><li>Productos</li></Link>  
                   <Link className='nav-link' to="/admin/pedidos" ><li>Pedidos <span>5</span> </li></Link>  
                   <Link className='nav-link' to="/admin/vendedores"><li>Vendedores</li></Link>
                    <div className='info-user-nav'>
                        <span>Admi:</span>
                        <button type='button'>Logout</button>
                    </div>
                </ul>
           
            </div>
          
        </nav>
        {
         mostrarMenuAdmin?(<IoMdClose className='nav-menu-boton' onClick={onMenuMostrarAdmin}/>)
                    :(<TiThMenu className='nav-menu-boton' onClick={onMenuMostrarAdmin} />)   

        }
    </div>
    <div className={`query-nav ${mostrarMenuAdmin ?  ({ display: "block" } ,console.log("muestra boton-..")): ({ display: "none" },console.log("ocultaboton"))}`}
         style={{ display: mostrarMenuAdmin ? "block" : "none" }}
     >   
     
     

        <ul>
            <Link className='nav-link' to="/admin/productos"><li>Productos</li></Link>  
            <Link className='nav-link' to="/admin/pedidos" ><li>Pedidos <span>5</span> </li></Link>  
            <Link className='nav-link' to="/admin/vendedores"><li>Vendedores</li></Link>
                <div className='info-user-nav'>
                    <span>Admin</span>
                    <button type='button'>Logout</button>
                </div>
        </ul>
    </div>
   </>
  )
}
