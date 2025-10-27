import { createContext } from 'react';
import React, { useState } from "react";

export const TipContext = createContext();

// eslint-disable-next-line react/prop-types
export const TipProvider = ({ children }) => {
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
        if (customValue === "") {
            setIsCustomActive(false)
        }
    }

    const handleCustomChange = (e) => {
        const value = e.target.value;
        const predefinedTips = [5, 10, 15, 25, 50];

        if (predefinedTips.includes(Number(value))) {
            alert(`${value}% exist !`);
            setCustomValue('');
            return;
        }

        setCustomValue(value);
        setSelectedTip('');
    };


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
        <TipContext.Provider
            value={{
                billInputValue, setBillInputValue,
                personInput, setPersonInput,
                isCustomActive, setIsCustomActive,
                customValue, setCustomValue,
                selectedTip, setSelectedTip,
                handleCustomClick,
                handleCustomBlur,
                handleCustomChange,
                handleTipClick,
                handleReset,
                tipPerPerson,
                totalPerPerson,
            }}
        >
            {children}

        </TipContext.Provider>
    )
}