import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from "react"
import { useEffect } from 'react';

async function App() {
  const [productlist, setProductlist] = useState([])
  await fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((data)=>setProductlist(data))

return (
    <div>

      {productlist.map((val) => {

        <div>
         
          <p>{val.id}</p>
          <p>{val.title}</p>
          <p>{val.price}</p>
          <p>{val.description}</p>
        </div>
      })}
    </div >
  );
}




export default App;
