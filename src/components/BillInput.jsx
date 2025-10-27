import React from "react";
import dollar from '../assets/images/icon-dollar.svg';
import { useContext } from "react";
import { TipBillContext } from "../context/TipBillContext";

export default function BillInput() {
    const { billInputValue, setBillInputValue } = useContext(TipBillContext)
    return (
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
    )
}