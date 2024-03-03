import React from 'react';
import Logo from '../assets/logo.png';

export const Login = () => {
  return (
    <>
      <div className='img-container'>
        <div> 
            <img src={ Logo } alt='Logo' />
        </div>
        <h1>Suministros C.A</h1>
      </div>  

      <section>
              <div className='image-container'>

              </div>
              
              <div className='form-container'>
                  <h3>Inicia Sesion</h3>
              </div>
      </section>
        
    </>
  )
}
