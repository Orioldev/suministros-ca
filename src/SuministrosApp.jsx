import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Registro } from './auth/Registro';
import { Vendedor } from './pages/vendedor/Vendedor';
import Historial from './pages/vendedor/Historial';
import { Cobranzas } from './pages/vendedor/Cobranzas';
import Productos from './pages/admin/Productos';
import Pedidos from './pages/admin/Pedidos';
import Vendedores from './pages/admin/Vendedores';



export const SuministrosApp = () => {
  return (
    <>
            <Routes>
                <Route path='/login' element={ <Login/> } />
                <Route path='/registro' element={ <Registro /> } />
                <Route path='/vendedor' element={ <Vendedor/> } />
       
                <Route path='/cobranzas' element={ <Cobranzas/> } />
                <Route path='/historial' element={ <Historial/> } />
                <Route path='/admin/productos' element={ <Productos/> } />
                <Route path='/admin/pedidos' element={ <Pedidos/> } />
                <Route path='/admin/vendedores' element={ <Vendedores/> } />
                <Route path='/*' element={ <Navigate to='/login' /> } />
            </Routes>
    </>
  )
}
