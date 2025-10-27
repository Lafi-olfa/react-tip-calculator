import React, { useContext } from "react";
import person from '../assets/images/icon-person.svg';
import { TipContext } from "../context/tipContext";

export default function PeopleInput() {
    const { personInput, setPersonInput } = useContext(TipContext)
    return (
        <>
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
        </>
    )
}