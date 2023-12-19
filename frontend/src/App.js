import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import { Router, Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
