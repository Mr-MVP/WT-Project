import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Login from './pages/login';
import Signup from './pages/signup';

export default function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}