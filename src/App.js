import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import Login from './pages/Login';


function App() {
  const username = localStorage.getItem('username');
  return (
    <div className="container-fluid">
      <div className="App row limited">
        <NavBar/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/notifications" component={Notifications}/>
            <Route exact path="/messages" component={Messages}/>
            <Route exact path="/bookmarks" component={Bookmarks}/>
            <Route exact path="/lists" component={Lists}/>
            <Route exact path="/:username" component={() => <Profile username={username} /> }/>
            <Redirect from="*" to="/" />
          </Switch>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
