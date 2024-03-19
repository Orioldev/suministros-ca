import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';

const Historial = () => {

  // Estado para el nuevo cliente
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    telefono: '',
    correo: '',
  });

  // Estado para la lista de clientes
  const [clientes, setClientes] = useState([]);

  // Función para agregar un nuevo cliente
  const agregarCliente = () => {
    // Validar que los campos no estén vacíos
    if (nuevoCliente.nombre === '' || nuevoCliente.telefono === '' || nuevoCliente.correo === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Agregar el nuevo cliente a la lista
    const nuevoClienteLista = [...clientes, nuevoCliente];
    setClientes(nuevoClienteLista);

    // Limpiar el estado del nuevo cliente
    setNuevoCliente({
      nombre: '',
      telefono: '',
      correo: '',
    });
  };

  // Función para editar un cliente
  const editarCliente = (indice) => {
    // Obtener el cliente a editar
    const cliente = clientes[indice];

    // Actualizar el estado del nuevo cliente con la información del cliente a editar
    setNuevoCliente({
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      correo: cliente.correo,
    });
  };

  // Función para guardar un cliente después de editarlo
  const guardarCliente = (indice) => {
    // Validar que los campos no estén vacíos
    if (nuevoCliente.nombre === '' || nuevoCliente.telefono === '' || nuevoCliente.correo === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Actualizar la lista de clientes con el cliente editado
    const clientesActualizados = [...clientes];
    clientesActualizados[indice] = nuevoCliente;
    setClientes(clientesActualizados);

    // Limpiar el estado del nuevo cliente
    setNuevoCliente({
      nombre: '',
      telefono: '',
      correo: '',
    });
  };

  // Función para eliminar un cliente
  const eliminarCliente = (indice) => {
    // Eliminar el cliente de la lista
    const clientesActualizados = [...clientes];
    clientesActualizados.splice(indice, 1);
    setClientes(clientesActualizados);
  };

  return (
    <>
      <Navbar/>
      <div className='historial-container'>
      

      <h2>Crear cliente</h2>

      <form>
       
        <input type="text" id="nombre" name="nombre" placeholder='nombre' value={nuevoCliente.nombre} onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })} />

       
        <input type="text" id="telefono" name="telefono" placeholder='telefono' value={nuevoCliente.telefono} onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })} />

       
        <input type="email" id="correo" name="correo" placeholder='correo' value={nuevoCliente.correo} onChange={(e) => setNuevoCliente({ ...nuevoCliente, correo: e.target.value })} />

        <button type="button" onClick={agregarCliente}>Crear Cliente</button>
      </form>

      <h3>Lista de Clientes</h3>

      <ul className='lista-clientes-historial'>
        {clientes.map((cliente, indice) => (
          <li className='contenedor-clientes' key={indice}>
              <div>{cliente.nombre} - {cliente.telefono} - {cliente.correo}</div> 
              <div className='botones-crud-historial'>
                  <button type="button" onClick={() => editarCliente(indice)}>Editar</button>
                  <button type="button" onClick={() => guardarCliente(indice)}>Guardar</button>
                  <button type="button" onClick={() => eliminarCliente(indice)}>Borrar</button>
              </div>
            
          </li>
        ))}
      </ul>
    </div>
    </>
    
    
  );
};

export default Historial;
