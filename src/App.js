import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { UserForm } from './components/UserForm';
import Places from './components/Places'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={UserForm}></Route>
          <Route path='/places' component={Places}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
