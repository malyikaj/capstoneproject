import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import UserComponent from './components/UserComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className = "container">
                <Switch> 
                    <Route path = "/" component = {UserComponent} ></Route>
                    <Route path = "/persons" component = {UserComponent}> </Route>
                    <Route path = "/add-persons" component = {UserComponent}> </Route>
                    <UserComponent />
                </Switch>
            </div>
          <FooterComponent />
      </Router> 
    </div>
  );
}

export default App;
