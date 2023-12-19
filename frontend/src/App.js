import React from 'react';
import { Router, Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
