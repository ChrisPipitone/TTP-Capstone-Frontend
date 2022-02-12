import './App.css';
import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import AddIngredients from './Components/AddIngredients'
import NameSandwich from './Components/NameSandwich'

//components
import Login from './Components/Login'
import Register from './Components/Register'
import UserHome from './Components/UserHome'

function App() {

  const[isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  async function isAuth () {
    try {
      
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token : localStorage.token }
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect( () => {
    isAuth();
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/AddIngredients" element={<AddIngredients />} />
          <Route path="/NameSandwich" element={<NameSandwich />} />
          <Route path="/Register" element={<Register />} />

          {/* if not authenticated login if they are authenticated redirect to dashboard */}
          <Route exact path="/Login" render= {props => 
              !isAuthenticated ? (
              <Login {...props} setAuth={setAuth}/>
            ) : 
              <Navigate to="/UserHome"/>
            } 
            />
          {/* <Route path="/Login" element={<Login />} /> */}


          <Route exact path="/register" render={props => 
            !isAuthenticated ? (
            <Register {...props} setAuth={setAuth}/> 
            ) : 
            <Navigate to="/Login" />
          } 
          />

          {/* if not authenticated go to login if authenticated go to userHome*/}
          <Route exact path="/" render={props => 
            isAuthenticated ? (
            <UserHome {...props} setAuth={setAuth}/> 
            ) : 
            <Navigate to="/Login" /> 
          } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;