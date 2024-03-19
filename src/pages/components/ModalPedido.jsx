import React from 'react'
import { IoMdClose } from "react-icons/io";

export const ModalPedido = ({ showModal ,modalPedido}) => {
  return (
    <div className={`contenedor-modal-pedido ${showModal ? { display: "block" } : { display: "none" }}`}
    style={{ display: showModal? "block" : "none" }}>


    <div className='close-container-pedidos' onClick={modalPedido}><IoMdClose/><span>cerrar</span></div>
        
    <h4 className='titulo-modal-pedido'>Orden de pedido</h4>    
     
        <div className='container-modal'>
            <div className='producto-pedidos'>
                <div className="card-producto-modal">
                    <div className='contenedor-imagen-card-producto' ><img src="https://ve.epaenlinea.com/media/catalog/product/cache/9de02ba98484dc90d74f47a4b2fb992a/a/d/ad6bee43-8ec7-4d56-8a24-9ae6e8a275c6.jpg" alt="nombre_producto" className="card-img-top" />  </div>
                    <div className="card-body">
                        <h5 className="card-title">Titulo-producto</h5>
                        <p className="card-text">Descripcion del producto ...</p>
                        <p className="card-text">Precio: $45</p>
                        <p className="card-text">Unidades disponibles: 6</p>
                   
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
                   <span> <strong>Cantidad</strong>: <input type="number" min="1" max="100"  /></span>
                    <span><strong>Total</strong>: 300$</span>
                </div>
                <button className='boton-enviar-pedido'>Enviar pedido</button>
            </div>
        </div>

    </div>

  )
}
