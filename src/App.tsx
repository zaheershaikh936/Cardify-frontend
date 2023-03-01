import React from 'react';
import './assets/css/style.css';

// !core import
import Header from './core/header/Header';

// !component import 
import Home from './modules/home/Home'
const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;