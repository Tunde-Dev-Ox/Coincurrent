import {useState, useEffect} from "react";
import '../css/hero.css'

function CurrencyInputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency = "USD",
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
    ...props
}) {
     return(
        <div className={`inputBox-container ${className}`}>
            <div className="inputBox-wrapper">
               <label htmlFor="">{label}</label>
               <div className="input-position">
               <input className="currency-input"
                     value={amount}
                     type="number"
                     onChange={(e) => {
                        const newValue = Number(e.target.value);
                        onAmountChange(isNaN(newValue) ? 0 : newValue); 
                     }}
                     disabled={amountDisabled}
                     placeholder="0"
               />
                    <div className="selectBox">
                        <select
                className="currency-select"
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                disabled = {currencyDisabled}
                >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
                        </select>
                    </div>

               </div>
            </div>
        </div>
     )
}

export default CurrencyInputBox;