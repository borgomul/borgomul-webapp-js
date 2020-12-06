import React from "react";
import logo from "./logo-borgomul-triangle.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.component";

function App() {
  return (
    <div className="App">
      <SearchBar
        placeholder="Search for content..."
        color="#407B58"
        changed={null}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>বর্গমূল</div>
      </header>
    </div>
  );
}

export default App;
