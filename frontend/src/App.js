import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import NavBar from './components/NavBar';
// import Main from './components/Main';
import SideBar from './components/SideBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/explore" component={Explore}/>
      </Switch>
      {/* <Main/> */}
      <SideBar/>
    </div>
  );
}

export default App;
