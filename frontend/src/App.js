import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="container-fluid">
    <div className="App row limited">
      <NavBar/>
      {/* <Main> */}
        {/* <Home/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore}/>
          <Route exact path="/notifications" component={Profile}/>
          <Route exact path="/messages" component={Profile}/>
          <Route exact path="/bookmarks" component={Profile}/>
          <Route exact path="/lists" component={Profile}/>
          <Route exact path="/profile" component={Profile}/>
          <Redirect from="*" to="/" />
        </Switch>
      {/* </Main> */}
      <SideBar/>
    </div>
    </div>
  );
}

export default App;
