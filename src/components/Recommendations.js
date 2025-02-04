import React, { useState } from 'react';
import './Recommendations.css';

const Recommendations = () => {
  const [city, setCity] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const handleFetchRecommendations = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setError('');
    setRecommendations([]); // Clear previous results

    try {
      // Simulating API call with dummy data
      const dummyData = {
        "Delhi": [
          {
            name: "India Gate",
            description: "Historic monument and war memorial.",
            image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "Red Fort",
            description: "A UNESCO World Heritage Site.",
            image: "https://wallpaperaccess.com/full/2399199.jpg"
          },
          {
            name: "Qutub Minar",
            description: "A towering example of Indo-Islamic architecture.",
            image: "https://th.bing.com/th/id/R.d6361bf60474d0bebd0163df5fe9d35d?rik=0UaPDSoqHhmX%2fw&riu=http%3a%2f%2fwww.bhavyaholidays.com%2fblogs%2fwp-content%2fuploads%2f2014%2f03%2fQutub-Minar-Delhi.jpg&ehk=jWlKgqANH%2fF%2bw6HhyTVcTSv5SvBoOfR%2b6%2faLVNTUoto%3d&risl=&pid=ImgRaw&r=0"
          },
          {
            name: "Lotus Temple",
            description: "A Bahá'í House of Worship known for its flower-like design.",
            image: "https://th.bing.com/th/id/OIP.dB8TiI3Vu-aYiI6zATIKDQHaEp?rs=1&pid=ImgDetMain"
          },
          {
            name: "Humayun's Tomb",
            description: "A stunning example of Mughal architecture.",
            image: "https://th.bing.com/th/id/OIP.iSHu_6q9J4RmiDuZ0G13ZwHaE8?rs=1&pid=ImgDetMain"
          }
        ]
      };

      const cityRecommendations = dummyData[city];
      if (cityRecommendations) {
        setRecommendations(cityRecommendations);
      } else {
        throw new Error('No recommendations found for the entered city.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Find Top Destinations</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchRecommendations}>Get Recommendations</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="results">
        {recommendations.map((place, index) => (
          <div key={index} className="recommendation-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
