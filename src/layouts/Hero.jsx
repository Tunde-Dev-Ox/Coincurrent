import {useState} from 'react';
import '../css/hero.css'
import {CurrencyInputBox} from '../components/index.js';
import useCurrencyInfo from '../hooks/useCurrencyInfo';



function Hero() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("eur");
    const [convertedAmount, setConvertedAmount] = useState(0);
    // const [result, setResult] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }
    return (
        <div className="hero">
            <div className="hero-inner-wrapper">
                <div className="hero-text-wrapper">
                    <div className="hero-textcontent">
                        <h1 className="hero-title">
                            Save time when calculating exchange rates
                        </h1>
                        <p className='hero-subtitle'>
                            We provide the most accurate and up-to-date exchange rate data for over 168 currencies.
                        </p>
                    </div>
                    <div className="converter-input-wrapper">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                        className="currency-form">
                        <div className="inputBox-maincontainer">
                        <div className="input-wrapper">
                            <CurrencyInputBox
                                label="Amount"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={from}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                amountDisabled={false}
                                value={amount}
                            />
                        </div>
                        <div className="swap">
                            <button type="button" onClick={swap}>
                               <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" d="m16.629 11.999-1.2-1.2 3.085-3.086H2.572V5.999h15.942L15.43 2.913l1.2-1.2 4.543 4.543a.829.829 0 0 1 0 1.2l-4.543 4.543Zm-9.257-.001 1.2 1.2-3.086 3.086h15.943v1.714H5.486l3.086 3.086-1.2 1.2-4.543-4.543a.829.829 0 0 1 0-1.2l4.543-4.543Z" clipRule="evenodd"></path>
                               </svg>
                            </button>
                        </div>
                        <div className="input-wrapper">
                            <CurrencyInputBox
                                label="Converted to"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                value={convertedAmount}
                            />
                        </div>
                        </div>
                        <div className="convert-button">
                            <button type="submit" onClick={convert}>Convert {} to {}</button>
                        </div>
                        <div className="result">
                            <p>{amount} {from.toUpperCase()} = <span>{convertedAmount} {to.toUpperCase()}</span></p>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="hero-media-wrapper">
                    <video src="/assets/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm" loop muted autoPlay playsInline></video>
                </div>
            </div>
        </div>
    );
}

export default Hero;