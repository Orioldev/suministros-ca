import React from 'react'
import { Navbar } from '../components/Navbar'
import { CardProducto } from '../components/CardProducto'
import dataProductos from '../../data/data'

export const Vendedor = () => {
  return (
    <> 
    <Navbar/>
    
    <section className='contenedor-cards'>
    {
      dataProductos.map(producto => (
        <CardProducto key={producto.id}
                      producto={producto}
        />
      ))
    }
    </section>
    
    
    
    </>
  )
}
