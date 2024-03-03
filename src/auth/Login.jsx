import React from 'react'

export const Login = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>Suministros C.A</h1>
      </div>  

      <section>
              <div className='image-container'>

              </div>
              
              <div className='form-container'>
                  <h3>Inicia Sesion</h3>
                  <form className='form-login ' >
                      <input type="email" placeholder='correo' />
                      <input type="password" placeholder='contraseña' />
                      <p>¿No tienes cuenta? <span>registrate</span></p>
                      <button type="submit">ingresar</button>


                  </form>
              </div>
      </section>
        
    </>
  )
}
