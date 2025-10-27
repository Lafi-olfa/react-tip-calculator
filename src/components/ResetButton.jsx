import React, { useContext } from "react";
import { TipBillContext } from "../context/TipBillContext";

export default function ResetButton() {
  const { handleReset } = useContext(TipBillContext);
  return (
    <button
      type="button"
      className="btn btn-secondary reset"
      onClick={handleReset}
    >
      RESET
    </button>
  )
}