import React from 'react';
import Dashboard from './components/dashbord/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={SignIn}></Route>
        <Route exact path="/Home" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
