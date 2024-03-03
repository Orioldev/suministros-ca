import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <div className='img-container'>
        <div > 
            <img height="75px" src={ Logo } alt='Logo' />
        </div>
          <h1>Suministros C.A</h1>  
        </div>  
        <div className='info-pagina'>
        <p><strong>Suminstros C.A </strong> es una aplicacion en donde los administradores y vendedores manejan la logistica necesaria para vender los productos de una empresa mediante recepcion y cobro de pedidos.</p>
        
        </div>
      <section>
              <div className='image-container'>
                  <img src={Logo} alt="" />
              </div>
              
              <div className='form-container'>
                  <h2>Inicia Sesion</h2>
                  <form className='form-login ' >
                      <input type="email" placeholder='correo' />
                      <input type="password" placeholder='contraseña' />
                      <p>¿Quieres trabajar con nosotros?  <Link className='link'  to="/registro" ><span>postulate</span></Link> </p>
                      <button type="submit">Ingresar</button> 
                  </form>
              </div>
      </section>
        
    </>
  )
}
