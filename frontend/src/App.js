import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile}/>
      </Switch>
      <Main/>
      <SideBar/>
    </div>
  );
}

export default App;
