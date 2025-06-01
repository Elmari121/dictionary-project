import logo from "./dictionary-logo.png";
import './App.css';
import Dictionary from "./dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      
         
      </header>
      <main>
        <Dictionary/>
      </main>
     <footer className="App-footer">Coded by Elmari Robberts</footer>
      </div>
    </div>
  );
}


