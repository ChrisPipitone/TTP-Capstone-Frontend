import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AddIngredients from './Components/AddIngredients'
import NameSandwich from './Components/NameSandwich'
import Login from './Components/Login'
import Register from './Components/Register'
import UserHome from './Components/UserHome'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddIngredients" element={<AddIngredients />} />
          <Route path="/NameSandwich" element={<NameSandwich />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserHome" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;