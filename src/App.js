import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
