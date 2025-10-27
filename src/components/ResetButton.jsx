import React, { useContext } from "react";
import { TipContext } from "../context/tipContext";

export default function ResetButton() {
  const { handleReset } = useContext(TipContext);
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