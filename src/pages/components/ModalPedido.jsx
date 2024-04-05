import React from 'react'
import { IoMdClose } from "react-icons/io";

export const ModalPedido = ({ showModal ,modalPedido}) => {
  return (
    <div className={`contenedor-modal-pedido ${showModal ? { display: "block" } : { display: "none" }}`}
    style={{ display: showModal? "block" : "none" }}>


    <div className='close-container-pedidos' onClick={modalPedido}><IoMdClose/><span>cerrar</span></div>
        
    <h4 className='titulo-modal-pedido'>Orden de pedido</h4>    
     
        <div className='container-modal'>
            <div className='productos-pedidos'>
                <div className="card-producto-modal">
                    <div className="card-body-modal">
                        <p className="card-text"> 5</p>
                        <h5 className="card-title">Titulo-producto</h5>
                        <p className="card-text"> $45</p>
                        <IoMdClose/>
                        
                        
                   
                    </div>
                    <div className="card-body-modal">
                        <h5 className="card-title">Titulo-producto</h5>
                        <p className="card-text"> $45</p>
                        
                        
                   
                    </div>
                    <div className="card-body-modal">
                        <h5 className="card-title">Titulo-producto</h5>
                        <p className="card-text"> $45</p>
                        
                        
                   
                    </div>
                    <div className="card-body-modal">
                        <h5 className="card-title">Titulo-producto</h5>
                        <p className="card-text"> $45</p>
                        
                        
                   
                    </div>
                    
                 </div>
            </div>
            <div className='datos-comprador'>
                <div className='comprador'>
                    <button>Buscar comprador</button>
                     <span> <strong>Nombre</strong>: Perez</span>
                     <span><strong>Telefono</strong>: 04214255487</span>
                     <span><strong>Correo</strong>: Perez@hotmail.com</span>
                </div>
                <hr />
                <div className='producto-total-cantidad'>
                   
                    <span><strong>Total</strong>: 300$</span>
                </div>
                <button className='boton-enviar-pedido'>Enviar pedido</button>
            </div>
        </div>

    </div>

  )
}
