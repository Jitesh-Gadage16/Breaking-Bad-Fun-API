// import React, { Component } from 'react';
// import logo from './logo.svg';
import "./App.css";
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import CharactersGrid from "./components/Characters/CharactersGrid";
import Search from "./components/UI/Search";

import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
