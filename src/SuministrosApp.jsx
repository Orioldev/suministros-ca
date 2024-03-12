import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Registro } from './auth/Registro';
import { Vendedor } from './pages/vendedor/Vendedor';
import Historial from './pages/vendedor/Historial';
import { Cobranzas } from './pages/vendedor/Cobranzas';

export const SuministrosApp = () => {
  return (
    <>
            <Routes>
                <Route path='/login' element={ <Login/> } />
                <Route path='/registro' element={ <Registro /> } />
                <Route path='/vendedor' element={ <Vendedor/> } />
                <Route path='/cobranzas' element={ <Cobranzas/> } />
                <Route path='/historial' element={ <Historial/> } />

                <Route path='/*' element={ <Navigate to='/login' /> } />
            </Routes>
    </>
  )
}
