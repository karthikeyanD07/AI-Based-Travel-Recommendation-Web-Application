// src/components/Explore.js
import React, { useState } from 'react';
import './components/Explore.css';

const Explore = () => {
  const [city, setCity] = useState('');
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) {
      setError('Please enter a city.');
      return;
    }

    setError('');
    setLocations([]); // Clear previous results

    try {
      // Replace with your API URL and key
      const response = await fetch(
        `https://api.example.com/getLocations?city=${encodeURIComponent(city)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch locations.');
      }

      const data = await response.json();
      setLocations(data.locations || []);
    } catch (err) {
      setError('Unable to fetch locations. Please try again later.');
    }
  };

  return (
    <div className="explore-container">
      <h1>Explore Famous Locations</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
