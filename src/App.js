import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './RouteList.js'
import { Container } from 'react-bootstrap';


import './styles/App.scss';
import './styles/global.scss';

import Nav from './components/Nav.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>

        <Container className="main-outlet">
          <RouteList/>
        </Container>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
