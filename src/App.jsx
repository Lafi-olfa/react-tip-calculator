import './App.css'
import logo from "./assets/images/logo.svg";
import dollar from './assets/images/icon-dollar.svg';
import person from './assets/images/icon-person.svg';
import React, { useState } from "react";

function App() {
  const [billInputValue, setBillInputValue] = useState('');
  const [personInput, setPersonInput] = useState('');
  const [isCustomActive, setIsCustomActive] = useState(false)
  const [customValue, setCustomValue] = useState(''); 
  const [selectedTip, setSelectedTip] = useState('');

  const handleCustomClick = () => {
    setIsCustomActive(true);
    setSelectedTip(''); 
  }

  const handleCustomBlur = () => {
    if(customValue === ""){
      setIsCustomActive(false)
    }
  }

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomValue(value);
    if (value !== '') {
      setSelectedTip('');
    }
  }

  const handleTipClick = (percentage) => {
    setSelectedTip(percentage);
    setIsCustomActive(false);
    setCustomValue('');
  }

  const handleReset = () => {
    setBillInputValue('');
    setPersonInput('');
    setSelectedTip('');
    setCustomValue('');
    setIsCustomActive(false);
  };

   const calculateTip = () => {
    const bill = Math.max(parseFloat(billInputValue) || 0, 0);
    const people = Math.max(parseFloat(personInput) || 1, 1);
    
    let tipPercentage = 0;
    if (selectedTip !== '') {
      tipPercentage = Math.min(Math.max(parseFloat(selectedTip) / 100, 0), 1);
    } else if (customValue !== '') {
      tipPercentage = Math.min(Math.max(parseFloat(customValue) / 100, 0), 1);
    }
    
    const totalTip = bill * tipPercentage;
    const tipPerPerson = Math.floor((totalTip / people) * 100) / 100;
    const totalPerPerson = (bill + totalTip) / people;
    
    return {
      tipPerPerson: isNaN(tipPerPerson) ? '0.00' : tipPerPerson.toFixed(2),
      totalPerPerson: isNaN(totalPerPerson) ? '0.00' : totalPerPerson.toFixed(2)
    };
  };
  
  const { tipPerPerson, totalPerPerson } = calculateTip();
  

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
                type="number"
                min="0"
                step="0.01"
                value={billInputValue}
                onChange={(e) => setBillInputValue(e.target.value)}
                id="bill"
                name="bill"
                placeholder="0"
                required />
            </div>
          </div>
          
          {/* tip */}
          <div className="bill-tip-container">
            <label htmlFor="name" className='input-label'>Select Tip % </label>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button 
                  type="button" 
                  className={`btn btn-secondary ${selectedTip === 5 ? 'active' : ''}`}
                  onClick={() => handleTipClick(5)}
                >
                  5%
                </button>
                <button 
                  type="button" 
                  className={`btn btn-secondary ${selectedTip === 10 ? 'active' : ''}`}
                  onClick={() => handleTipClick(10)}
                >
                  10%
                </button>
              </div>
              
              <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button 
                  type="button" 
                  className={`btn btn-secondary ${selectedTip === 15 ? 'active' : ''}`}
                  onClick={() => handleTipClick(15)}
                >
                  15%
                </button>
                <button 
                  type="button" 
                  className={`btn btn-secondary ${selectedTip === 25 ? 'active' : ''}`}
                  onClick={() => handleTipClick(25)}
                >
                  25%
                </button>
              </div>
              
              <div className="btn-group" role="group" aria-label="Third group">
                <button 
                  type="button" 
                  className={`btn btn-secondary ${selectedTip === 50 ? 'active' : ''}`}
                  onClick={() => handleTipClick(50)}
                >
                  50%
                </button>
                
                {isCustomActive ? (
                  <input
                    type="number"
                    className="btn btn-secondary custom-input"
                    value={customValue}
                    onChange={handleCustomChange}
                    onBlur={handleCustomBlur}
                    autoFocus
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                ) : (
                  <button 
                    type="button"
                    className={`btn btn-secondary custom ${customValue !== '' ? 'active' : ''}`}
                    onClick={handleCustomClick}
                  >
                    Custom
                  </button> 
                )}
              </div>
            </div>
          </div>
          
          {/* people */}
          <div className="people-input-container">
            <div className="labels">
              <label htmlFor="name" className='input-label'>Number Of People</label>
              {
                personInput === '0' && <span className='input-error'>Can&apos;t be zero</span>
              }
            </div>
            <div className="people-input-icon">
              <img src={person} alt="Person Logo" className='bill-logo' />
              <input
                className={personInput === '0' ? "number-people-input error" : "number-people-input"}
                type="number"
                min="0"
                id="people"
                name="people"
                value={personInput}
                onChange={(e) => setPersonInput(e.target.value)}
                placeholder="0"
                required />
            </div>
          </div>
        </div>
        
        {/* input result */}
        <div className="input-result">
          <div className="tip-amount-container">
            <div className="tip-text">
              Tip Amount <br /> <span>/ person</span>
            </div>
            <div className="tip-amount">
              ${personInput === '0' ? '0.00' : tipPerPerson}
            </div>
          </div>
          <div className="total-tip">
            <div className="total-text">
              Total <br /> <span>/ person</span>
            </div>
            <div className="total-amount">
              ${personInput === '0' ? '0.00' : totalPerPerson}
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-secondary reset"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

export default App