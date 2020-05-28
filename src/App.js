import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Location from './Components/Location_Page/Location';
import Saved from './Components/Saved/Saved';
import Update from './Components/Update/Update';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/locations/:id' component={Location} />
        <Route path='/saved' component={Saved} />
        <Route path='/update' component={Update} />
      </Switch>
    </div>
  );
}

export default App;
