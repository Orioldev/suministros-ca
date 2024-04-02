import React from 'react'
import { HeaderAdmin } from '../components/HeaderAdmin'
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import dataProductos from '../../data/data';
import { CardProductoAdmin } from '../components/CardProductoAdmin';




const Productos = () => {
  return (
    <div>
        <HeaderAdmin/>
        
        <h2 className='h2-admin'>Productos</h2>
        
        <div className='contenedor-productos'>
                <div className='crear-items-producto'>
                    <div className='precio-dolar'>
                      <input type="number" min="1" placeholder=' ingrese precio dolar' />
                      <MdEdit className='boton-edit-admin' />
                      <IoIosSave  className='boton-delete-admin' />
                    </div>
                    <div className='crear-categoria'>
                      <input type="number" placeholder='crear categoria' />
                      <MdLibraryAdd  className='boton-category-admin' />
                    </div>
                    <div className='crear-producto'>
                    <button type='button'> <MdLibraryAdd />Crear Producto</button>

                    </div>
                </div>

                <h3 className='titulo-categorias'>Categorias</h3>

                  <div className='categorias'>
                    <span className='categoria' >Mobiliario <MdDelete /></span>
                    <span className='categoria' >Hogar <MdDelete /></span>
                    <span className='categoria' >Alimentos <MdDelete /></span>
                    <span className='categoria' >Cocina <MdDelete /></span>
                    <span className='categoria' >Oficina <MdDelete /></span>
                    <span className='categoria' >Deporte <MdDelete /></span>
                    
                  </div>
                  <hr />

                <div className='lista-productos-admin'>
                  {
                    dataProductos.map((producto)=>(
                      <CardProductoAdmin
                          key={producto.id}
                          producto={producto}
                      />
                      
                    ))
                  }
                </div>

        </div>
    

    </div>
  )
}

export default Productos