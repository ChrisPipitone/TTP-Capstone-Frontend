import './App.css';
import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
      <Router>
        <div className='container'>
          <Switch>

             {/* if not authenticated login if they are authenticated redirect to dashboard */}
             <Route exact path="/Login" render= {props => 
              !isAuthenticated ? (
              <Login {...props} setAuth={setAuth}/>
            ) : 
              <Redirect to="/UserHome" />
            } 
            />

            <Route exact path="/Register" render={props => 
             !isAuthenticated ? (
              <Register {...props} setAuth={setAuth}/> 
              ) : 
              <Redirect to="/Login" />
            } 
            />

          {/* if not authenticated go to login if authenticated go to dashboard*/}

          <Route exact path="/UserHome" render={props => 
              isAuthenticated ? (
              <UserHome {...props} setAuth={setAuth}/> 
              ) : 
              <Redirect to="/login" /> 
            } 
            />

     <Route path="/NameSandwich">
            <NameSandwich />
          </Route>
          <Route path="/">
            <Home />
          </Route> 

     

          <Route path="/UserHome">
              <UserHome />
            </Route>

            <Route path="/AddIngredients">
              <AddIngredients />
            </Route>

          

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;