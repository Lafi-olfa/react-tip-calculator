import './App.css'
import logo from "./assets/images/logo.svg";
import dollar from './assets/images/icon-dollar.svg';
import person from './assets/images/icon-person.svg';
import React from "react";

function App() {

  return (
    <div className="app">
      <img src={logo} alt="Splitter Logo" />
      <div className="calculator-container">
        <div className="input-section">
          {/* bill */}
          <div className="bill-input-container">
            <label htmlFor="name" className='input-label'>Bill</label>
            <div className="bill-input-icon">
              <img src={dollar} alt="Dollar Logo" className='bill-logo' />
              <input
                className='amount-input'
                type="text"
                id="bill"
                name="bill"
                required />
            </div>
          </div>
          {/* tip */}
          <div className="bill-tip-container">
            <label htmlFor="name" className='input-label'>Select Tip % </label>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">5%</button>
                <button type="button" className="btn btn-secondary">10%</button>
              </div>
              {/*  */}
              <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary">15%</button>
                <button type="button" className="btn btn-secondary">25%</button>
              </div>
              {/*  */}
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary">50%</button>
                <button type="button" className="btn btn-secondary custom">Custom</button>
              </div>
            </div>
          </div>
          {/* people */}
          <div className="people-input-container">
            <label htmlFor="name" className='input-label'>Number Of People</label>
            <div className="people-input-icon">
              <img src={person} alt="Person Logo" className='bill-logo' />
              <input
                className='number-people-input'
                type="text"
                id="bill"
                name="bill"
                required />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default App
