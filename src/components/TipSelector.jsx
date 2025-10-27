import React, { useContext } from "react";
import { TipContext } from "../context/tipContext";

export default function TipSelector() {
    const { selectedTip, handleTipClick, isCustomActive,
        customValue, handleCustomChange, handleCustomBlur,
        handleCustomClick } = useContext(TipContext)

    return (
        <>
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
        </>
    )
}