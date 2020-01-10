import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
