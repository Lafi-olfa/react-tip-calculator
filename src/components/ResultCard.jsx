import React, { useContext } from "react";
import ResetButton from "./ResetButton";
import { TipBillContext } from "../context/TipBillContext";

export default function ResultCard() {
  const { personInput, tipPerPerson, totalPerPerson } = useContext(TipBillContext)
  return (
    <>
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
        <ResetButton />
      </div>
    </>
  )
}