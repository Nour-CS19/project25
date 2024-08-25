import React, { useState, useEffect } from 'react';
import './Weather.css';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (countries.length === 0) return <div>No countries found</div>;

  return (
    <div className="countries-container">
      <h1>Countries List</h1>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
