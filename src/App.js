import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
require('dotenv').config();


const App = () => {

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

useEffect(() => {
  console.log('Effect has been run')
});

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
