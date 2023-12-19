import React from 'react';
import { Router, Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contact from "./pages/Contact/Contact";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
