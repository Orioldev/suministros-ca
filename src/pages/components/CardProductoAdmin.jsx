import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";


export const CardProductoAdmin = ({ producto }) => {
  const { imagen, nombre, descripcion, precio, unidadesDisponibles,categoria } = producto;

  return (
    <>

    <div className="card-producto-admin">
      <div className='contenedor-imagen-card-producto' ><img src={imagen} alt={nombre} className="card-img-top" />  </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{categoria}</p>

        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Unidades disponibles: {unidadesDisponibles}</p>
        
        <div className='botones-producto-admin'>
        <MdEditSquare className='boton-edit-admin' />

        <MdDelete className='boton-delete-admin'/>
        </div>
      </div>
    </div>

    </>
  );
};
