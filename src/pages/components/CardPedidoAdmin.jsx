import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";


export const CardPedidoAdmin = ({ producto }) => {
  const { imagen, nombre, descripcion, precio, unidadesDisponibles,categoria,cantidadSolicitada } = producto;

  return (
    <>

    <div className="card-producto-admin">
      <div className='contenedor-imagen-card-producto' ><img src={imagen} alt={nombre} className="card-img-top" />  </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{cantidadSolicitada}</p>
        <p className="card-text">{categoria}</p>

        <p className="card-text">Precio: ${precio}</p>
        
        
        <div className='datos-comprador'>
            <span> <strong>Nombre</strong>:Pedro Camejo</span>
            <span> <strong>Telefono</strong>:042566547</span>
            <span> <strong>Correo</strong>:camejilla@gmail.com</span>
        </div>
      </div>
      <button type='button'>Eliminar</button>
    </div>

    </>
  );
};
