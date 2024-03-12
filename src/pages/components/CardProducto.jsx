import React from 'react';



export const CardProducto = ({ producto }) => {
  const { imagen, nombre, descripcion, precio, unidadesDisponibles } = producto;

  return (
   
        <div className="card-producto">
      <div className='contenedor-imagen-card-producto' ><img src={imagen} alt={nombre} className="card-img-top" />  </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Unidades disponibles: {unidadesDisponibles}</p>
        <button variant="primary">Enviar orden</button>
      </div>
    </div>

    
    
  );
};
