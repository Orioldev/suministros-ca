import React from 'react'
import { FaUser } from "react-icons/fa";
import {MdEdit, MdDelete,} from "react-icons/md";
import { FaSave } from "react-icons/fa";
const VendedorItem = ({vendedor}) => {

    const { nombre,telefono,correo,contraseña } =vendedor

  return (
    <div className='vendedor-item'>
        <FaUser />
        <span><strong>nombre: </strong> {nombre} </span>
        <span> <strong>tel:</strong>{telefono} </span>
        <span> <strong>correo:</strong>{correo} </span>
        <span> <strong>contraseña:</strong>{contraseña} </span>

        <div className='botones-vendedores'>
            <MdEdit className='boton-vendedor' />
            <FaSave className='boton-vendedor'/>
            <MdDelete className='boton-vendedor'/>
        
        </div>

    </div>
  )
}

export default VendedorItem