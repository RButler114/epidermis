import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import './styles/global.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav.js'
import Footer from './Footer.js'

import About from './routes/About.js'
import Home from './routes/Home.js'



function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>


      
      <Router>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
