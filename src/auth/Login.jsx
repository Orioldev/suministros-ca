import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  //Funciones de los eventos
  const inputEmailChange = (e)=>setEmail(e.target.value)
  const inputPasswordChange = (e)=>setPassword(e.target.value)

  
  //submit del formulario, simulacion
  const onUserSubmit = (e) => {
    e.preventDefault; 
    if (email == "ferreiraadrian2022@gmail.com" && password == "123456" ) 
    navigate("/admin/productos")
    else
    navigate("/vendedor")
  };


  
  
  return (
    <>
      <div className='img-container'>
        <div > 
            <img height="75px" src={ Logo } alt='Logo' />
        </div>
          <h1>Import Suministros F&P, C.A</h1>  
        </div>  
        <div className='info-pagina'>
        <p> Es una aplicacion en donde los administradores y vendedores manejan la logistica necesaria para vender los productos de la empresa <strong>Import Suministros F&P, C.A</strong>  mediante recepcion y cobro de pedidos.</p>
        
        </div>
      <section>
              <div className='image-container'>
                  <img src={Logo} alt="" />
              </div>
              
              <div className='form-container'>
                  <h2>Inicia Sesion</h2>
                  <form onSubmit={onUserSubmit} className='form-login ' >
                      <input value={email} onChange={inputEmailChange} type="email" placeholder='correo' />
                      <input value={password} onChange={inputPasswordChange} type="password" placeholder='contraseña' />
                      <p>¿Quieres trabajar con nosotros?  <Link className='link'  to="/registro" ><span>postulate</span></Link> </p>
                      <button  type='submit' >Ingresar</button> 
                  </form>
              </div>
      </section>
        
    </>
  )
}
