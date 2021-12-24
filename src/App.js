import React, { Component } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
// import Projects from './Components/Projects'
import { BrowserRouter as Router, Switch, Route, redirect } from 'react-router-dom';




class App extends Component {
  render () {
    return ( 
      <>
        <Router>
          <div className="App">
          
            <Switch>
              <Route path="/AboutMe" component={AboutMe}></Route>
              {/* <Route path="/Projects" component={Projects}></Route> */}
              <Route path="/Contact" component={Contact}></Route>
              <Route path="/" excact component={Home}></Route>
            </Switch>
          </div>
        </Router>  
      </>    
    );
  }
}



export default App;
