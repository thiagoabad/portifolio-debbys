import './App.css';
import React from "react";
import Home from './components/Home/Home';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
    </div>
  );
}

export default App;
