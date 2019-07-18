import React from 'react';
import './App.css';
import HooksExample from './components/HooksExample';
import ClassExample from './components/ClassExample';
import { Router } from "@reach/router"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ClassExample path="a" />
          <HooksExample path="b" />
        </Router>
      </header>
    </div>
  );
}

export default App;
