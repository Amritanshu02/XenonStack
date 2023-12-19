import React from 'react';
import Home from './pages/Home';
import { Router, Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
