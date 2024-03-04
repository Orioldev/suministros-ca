import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
export const Registro = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("")
  
  const inputNombreChange = (e)=>setNombre(e.target.value)
  const inputEmailChange = (e)=>setEmail(e.target.value)
  const inputTelefonoChange = (e)=>setTelefono(e.target.value)




  return (

   <>
      <div className='img-container'>
        <div > 
            <img height="75px" src={ Logo } alt='Logo' />
        </div>
          <h1>Import Suministros F&P, C.A</h1>  
        </div>  
        <div className='info-pagina'>
        <p><strong>En Import Suministros F&P, C.A, estamos buscando personas talentosas y motivadas para unirse a nuestro equipo de vendedores. Ofrecemos una oportunidad única para desarrollar tu carrera profesional en un entorno dinámico y desafiante, donde podrás aprender de los mejores y alcanzar tus metas. </strong></p>
        
        </div>
      <section>
              <div className='image-container'>
                  <img src={Logo} alt="" />
              </div>
              
              <div className='form-container'>
                  <h2>¡Postulate!</h2>
                  <form  className='form-login ' >
                      <input value={nombre} onChange={inputNombreChange} type="text" placeholder='nombre' />                    
                      <input value={email} onChange={inputEmailChange} type="email" placeholder='correo' />
                      <input value={telefono} onChange={inputTelefonoChange} type="tel" placeholder='telefono' />
                      <p>¿Ya eres vendedor ?  <Link className='link'  to="/login" ><span>ingresa</span></Link> </p>
                      <button type='button' >Enviar</button> 
                  </form>
              </div>
      </section>
        
    </>
  )
}
