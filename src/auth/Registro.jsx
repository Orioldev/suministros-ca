import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
export const Registro = () => {
  return (
    <>
      <div className='img-container'>
        <div > 
            <img height="75px" src={ Logo } alt='Logo' />
        </div>
          <h1>Suministros C.A</h1>  
        </div>  
        <div className='info-pagina'>
        <p><strong>En Suministro CA, estamos buscando personas talentosas y motivadas para unirse a nuestro equipo de vendedores. Ofrecemos una oportunidad única para desarrollar tu carrera profesional en un entorno dinámico y desafiante, donde podrás aprender de los mejores y alcanzar tus metas. </strong></p>
        
        </div>
      <section>
              <div className='image-container'>
                  <img src={Logo} alt="" />
              </div>
              
              <div className='form-container'>
                  <h2>¡Postulate!</h2>
                  <form className='form-login ' >
                      <input type="text" placeholder='nombre' />                    
                      <input type="email" placeholder='correo' />
                      <input type="tel" placeholder='telefono' />
                      <p>¿Ya eres vendedor ?  <Link className='link'  to="/login" ><span>ingresa</span></Link> </p>
                      <button type="submit">Enviar</button> 
                  </form>
              </div>
      </section>
        
    </>
  )
}
