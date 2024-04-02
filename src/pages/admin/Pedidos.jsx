import React from 'react'
import { HeaderAdmin } from '../components/HeaderAdmin'
import {CardPedidoAdmin} from '../components/CardPedidoAdmin'
import dataProductos from '../../data/data'
const Pedidos = () => {
  return (
    <>
        <HeaderAdmin/>
        <h2 className='h2-admin'>Pedidos</h2>
        <div className='lista-productos-admin'>
                  {
                    dataProductos.map((producto)=>(
                      <CardPedidoAdmin
                          key={producto.id}
                          producto={producto}
                      />
                      
                    ))
                  }
        </div>
    
    
    </>
  )
}

export default Pedidos