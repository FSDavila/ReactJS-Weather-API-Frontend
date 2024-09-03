import React, { useState } from 'react';
import axios from 'axios';
import { urlBackend } from './config';

export default function RegisterCityForm() {
  const [cityIds, setCityIds] = useState('');
  const [token, setToken] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cityIdArray = cityIds.split(',').map(id => id.trim()).filter(id => id);
      const response = await axios.put(urlBackend + '/weather/registerCity', new URLSearchParams({ 'city_id': cityIdArray }), {
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
      <h2 style={{marginBottom:"20px"}}>Register City Permission</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          🆔 City IDs (comma separated):<br></br>
            <input type="text" value={cityIds} onChange={(e) => setCityIds(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
          🔐 API Token to register permission*: <br></br>
            <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
          </label>
        </div>
        <p>*: Required Field</p>
        <button className="btn" type="submit">Register City 📝</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>}
      <br></br><br></br>
    </div>
  );
}