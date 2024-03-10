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

    const [visitedCountry, setVisitedCountry] = useState([])

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }

    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
        console.log(newVisitedFlags)
    }
    return (
      <>
        <h3>Country: {countries.length} </h3>
        <div>Visited: {visitedCountry.length}</div>
        <ol>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
        {
           visitedFlags.map((flag, index) => <img style={{width: '100px'}} src={flag} key={index}></img>) 
        }
        <div className="country-container">
          {countries.map((country) => (
            <Country
              country={country}
              key={country?.cca3}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlags={handleVisitedFlags}
            />
          ))}
        </div>
      </>
    );
}

export default Countries;