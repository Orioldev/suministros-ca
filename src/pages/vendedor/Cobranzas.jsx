import React from 'react'
import { FaEllipsisV } from "react-icons/fa";

import { Navbar } from '../components/Navbar'
export const Cobranzas = () => {
  return (

    <>
      <Navbar></Navbar>

      <div className='container-cobranza'>  
        <h1>Cobranzas</h1>
        
        <div className='container-items-cobrazas'>
            <div className='item-cobranza'>
              <p>Plazo de prueba del cliente Pedro Ramirez ha expirado, realizar cobranza <FaEllipsisV />
</p>
            </div>
            <div className='item-cobranza'>
              <p>Plazo de prueba del cliente Ana Rodriguez ha expirado, realizar cobranza <FaEllipsisV /></p>


            </div>
            <div className='item-cobranza'>
              <p>Plazo de prueba del cliente Samuel Lavoe ha expirado, realizar cobranza <FaEllipsisV /></p>


            </div>
            <div className='item-cobranza'>
              <p>Plazo de prueba del cliente Jhon Connor ha expirado, realizar cobranza <FaEllipsisV /></p>


            </div>
            <div className='item-cobranza'>
              <p>Plazo de prueba del cliente Amy Winehouse ha expirado, realizar cobranza <FaEllipsisV /></p>


          </div>
        </div>




  </div>
    </>    
    
  )
}
