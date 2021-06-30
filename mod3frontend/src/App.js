import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import UserComponent from './components/UserComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className = "container">
                <Switch> 
                    <Route path = "/" exact component = {UserComponent} />
                    <Route path = "/persons" component = {UserComponent} />
                    <Route path = "/add-persons" component = {CreateUserComponent} />
                    <UserComponent />
                </Switch>
            </div>
          <FooterComponent />
      </Router> 
    </div>
  );
}

export default App;
