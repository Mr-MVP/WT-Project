import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Donation from './pages/donation';
import AdminDonation from './pages/adminDonation';
import Events from './pages/events';

export default function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/donation' element={user ? (user.role === 'admin' ? <AdminDonation /> : <Donation />) : <Navigate to="/login" />} />
        <Route path='/events' element={<Events />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
