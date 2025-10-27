import './App.css'
import logo from "./assets/images/logo.svg";
import React from "react";
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import ResultCard from './components/ResultCard';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Splitter Logo" />
      <div className="calculator-container">
        <div className="input-section">
          {/* bill */}
          <BillInput />

          {/* tip */}
          <TipSelector />

          {/* people */}
          <PeopleInput />
        </div>

        {/* input result */}
        <ResultCard />
      </div>
    </div>
  )
}

export default App