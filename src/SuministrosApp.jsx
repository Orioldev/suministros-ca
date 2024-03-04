import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Registro } from './auth/Registro';
import { Vendedor } from './pages/Vendedor';

export const SuministrosApp = () => {
  return (
    <>
            <Routes>
                <Route path='/login' element={ <Login/> } />
                <Route path='/registro' element={ <Registro /> } />
                <Route path='/vendedor' element={ <Vendedor/> } />

                <Route path='/*' element={ <Navigate to='/login' /> } />
            </Routes>
    </>
  )
}
