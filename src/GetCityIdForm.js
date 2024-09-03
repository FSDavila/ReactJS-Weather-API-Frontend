import React, { useState } from 'react';
import axios from 'axios';
import { urlBackend } from './config';
import HelpBubble from './HelpBubble';

export default function GetCityIdForm() {
  const [cityName, setCityName] = useState('');
  const [state, setState] = useState('');
  const [token, setToken] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(urlBackend + '/weather/getCityId', new URLSearchParams({ city_name: cityName, state }), {
        headers: { token },
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
      setResult(null);
    }
  };

  return (
    <div className="weather-form-container">
      <h2 style={{marginBottom:"20px"}}>Retrieve City ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          🏙️ City Name: <HelpBubble text="Enter the full city name, with special characters if applicable." /><br></br>
            <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
          🌎 State: <HelpBubble text="Enter the two-letter abbreviation for your state (e.g., CA for California/US, SC for Santa Catarina/BR)." /><br></br>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
          🔐 API Token*: <br></br>
            <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
          </label>
        </div>
        <p>*: Required Field</p>
        <button className="btn" type="submit">Retrieve City ID 🔍</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}