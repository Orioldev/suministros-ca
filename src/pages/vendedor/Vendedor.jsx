import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Navbar } from '../components/Navbar'
import { CardProducto } from '../components/CardProducto'
import dataProductos from '../../data/data'
import { ModalPedido } from '../components/ModalPedido';

export const Vendedor = () => {
  const [showModal, setShowModal] = useState(false)


  const modalPedido = () => {
    setShowModal(!showModal)
  };


  return (
    <> 
    
    <Navbar/>
    <ModalPedido showModal={showModal} modalPedido={modalPedido}/>
    <h1>Productos</h1>
    
    <section className='contenedor-cards'>
    {
      dataProductos.map(producto => (
        <CardProducto key={producto.id}
                      producto={producto}
                      modalPedido={modalPedido}
        />
      ))
    }
    
    </section>
   


  {/*   <div className='orden-pedido'>
      <TiShoppingCart/>
      <span>Orden </span> <p>3</p>
    </div>
     */}
    
    
    </>
  )
}
