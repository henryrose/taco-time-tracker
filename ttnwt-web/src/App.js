import React from 'react';
import logo from './logo.svg';
import './App.css';

import LocationList from './LocationList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TTNW Tracker!</h1>
      </header>
      <section>
        <h2>Find location:</h2>
        <LocationList />
      </section>
  
    </div>
  );
}

export default App;
