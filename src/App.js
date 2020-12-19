import React from "react";
import logo from "./logo-borgomul-triangle.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import { AsyncMode } from "react-is";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="background-title">বর্গমূল</div>
      </header>
      <Navigation />
      <SideBar />
    </div>
  );
}

export default App;
