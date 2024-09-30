import { useEffect, useState } from "react";


/*
logic to fetch currency info from the API
1. import useEffect and useState from react
2. create a function called useCurrencyInfo
3. Inside the function, I will create a state variable to track the currency info changes with useState hook and initialize it with an empty object
4. I will use the useEffect hook to fetch the currency info from the API

*/
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                const receivedData = await response.json();
                setData(receivedData[currency]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCurrencyInfo();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;