import React from 'react';
// Main Sass
import './scss/main.scss'; 
import Header from './components/Header';
import Landing from './components/Landing';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Tabs />
    </div>
  );
}

export default App;
