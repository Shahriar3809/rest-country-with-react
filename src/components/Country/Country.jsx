
import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
    handleVisitedFlags(country.flags.png)
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <p>Name: {name?.common}</p>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button className="btn" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      <p>{visited && "I have visited this country"}</p>
    </div>
  );
};

export default Country;