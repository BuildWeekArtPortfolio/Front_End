import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import AboutUs from "./components/About";
import SignIn from "./components/SignIn";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
