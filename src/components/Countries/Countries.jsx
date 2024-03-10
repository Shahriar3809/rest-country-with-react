import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(allData => setCountries(allData))
        
    }, [])




    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            {
                countries.map((country)=> <Country country={country} key={country?.cca3} />)
            }
        </div>
    )
}

export default Countries;