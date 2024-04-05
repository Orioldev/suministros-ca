import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const CardProducto = ({ producto }) => {
  const { imagen, nombre, descripcion, precio, unidadesDisponibles } = producto;
   
  const [productosCar, setProductosCar] = useState([]);

  const onAñadirProducto = () => {
    const producto = {
      id: uuidv4(),
      nombre:nombre,
      precio:precio
    }
    setProductosCar((productosCar)=> [...productosCar, producto]  )
    
    console.log("productos del carrito: ",productosCar)
  };

  return (
    <>

    <div className="card-producto">
      <div className='contenedor-imagen-card-producto' ><img src={imagen} alt={nombre} className="card-img-top" />  </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Unidades disponibles: {unidadesDisponibles}</p>
        <button onClick={onAñadirProducto} variant="primary">Enviar al carrito</button>
      </div>
    </div>

    </>
  );
};
