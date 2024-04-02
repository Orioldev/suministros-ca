import React from 'react'
import { HeaderAdmin } from '../components/HeaderAdmin'
import dataVendedores from '../../data/dataVendedores'
import VendedorItem from '../components/VendedorItem'

const Vendedores = () => {
  return (
    <>
      <HeaderAdmin/>   
      <h2 className='h2-admin'>Vendedores</h2>

      <div className='contenedor-vendedores'>
       {
        dataVendedores.map((vendedor)=>(
          <VendedorItem
            key={vendedor.id}
            vendedor={vendedor}
          
          />
         
        ))
       }
      </div>
    </>
  )
}

export default Vendedores