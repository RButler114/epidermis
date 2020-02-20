import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function Home() {
  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users/');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm="12">
          <h1>Home Page</h1>
          <p> Main Featured Section</p>
        </Col>
        <Col sm="4">
          <p>Sub Feature</p>
        </Col>
        <Col sm="4">
          <p>Sub Feature</p>
        </Col>
        <Col sm="4">
          <p>Sub Feature</p>
        </Col>
      </Row>
      <Row>
        <Col sm="9">
          <p>main content Section</p>
          <p>See more v Back to top ^</p>
          <p></p>
        </Col>
        <Col sm="3">
          sidebar
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
