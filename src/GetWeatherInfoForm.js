import React, { useState } from 'react';
import axios from 'axios';
import { urlBackend } from './config';
import HelpBubble from './HelpBubble';

export default function GetWeatherInfoForm() {
  const [cityId, setCityId] = useState('');
  const [cityName, setCityName] = useState('');
  const [state, setState] = useState('');
  const [forecastDays, setForecastDays] = useState('15');
  const [useCustomForecastDays, setUseCustomForecastDays] = useState(false);
  const [token, setToken] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare request data
    const requestData = new URLSearchParams();
    if (cityId) requestData.append('city_id', cityId);
    if (cityName) requestData.append('city_name', cityName);
    if (state) requestData.append('state', state);
    requestData.append('forecast_days', useCustomForecastDays ? forecastDays : '15');

    try {
      const response = await axios.post(
        `${urlBackend}/weather/v2/getInfo`,
        requestData,
        { headers: { token } }
      );
      console.log('API Response Data:', response.data); // Add this line
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
      setResult(null);
    }
  };

  const weatherColumns = React.useMemo(
    () => [
      { Header: 'Time of Day', accessor: 'time' },
      { Header: 'Cloud Coverage (%)', accessor: 'cloudCoverage' },
      { Header: 'Temperature Min (ºC)', accessor: 'temperatureMin' },
      { Header: 'Temperature Max (ºC)', accessor: 'temperatureMax' },
      { Header: 'Humidity Max (%)', accessor: 'humidityMax' },
      { Header: 'Sunrise/Sunset (UTC)', accessor: 'sun' },
      { Header: 'Precipitation (mm)', accessor: 'precipitation' },
      { Header: 'Rain Probability (%)', accessor: 'probability' }
    ],
    []
  );

  const createTableData = (dayData) => {
    const timesOfDay = ['🌅dawn', '☀️morning', '🌇afternoon', '🌙night'];
    return timesOfDay.map(time => {
      const cloudCoverage = dayData.cloud_coverage || { low: 'N/A', mid: 'N/A', high: 'N/A' };
      const temperature = dayData.temperature || { min: 'N/A', max: 'N/A' };
      const humidity = dayData.humidity || { max: 'N/A' };
      
      // Add checks to ensure dayData.sun exists and has the expected properties
      const sunrise = dayData.sun?.sunrise || '-';
      const sunset = dayData.sun?.sunset || '-';
      const sun = time === '🌅dawn' ? sunrise : time === '🌙night' ? sunset : '-';
      
      const precipitation = dayData.rain?.precipitation || 0;
      const probability = dayData.rain?.probability || 0;

      return {
        time: time.charAt(0).toUpperCase() + time.slice(1),
        cloudCoverage: `${cloudCoverage.low}% (low), ${cloudCoverage.mid}% (mid), ${cloudCoverage.high}% (high)`,
        temperatureMin: temperature.min,
        temperatureMax: temperature.max,
        humidityMax: humidity.max,
        sun: sun,
        precipitation: precipitation,
        probability: probability
      };
    });
  };

  const weatherData = React.useMemo(
    () => result?.data.map(dayData => ({
      date: dayData.date_br,
      details: createTableData(dayData),
      // Add checks to ensure text_icon and text are defined
      weatherExplanation: dayData.text_icon?.text?.en || 'No explanation available'
    })) || [],
    [result]
  );

  return (
    <div className="weather-form-container" >
      <h2>Online Weather Report by City 📊</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <label>🆔 City ID:</label>
            <br />
            <input type="text" value={cityId} onChange={(e) => setCityId(e.target.value)} />

          <label style={{fontSize: "11px"}}>
            <input
              type="checkbox"
              checked={useCustomForecastDays}
              onChange={(e) => setUseCustomForecastDays(e.target.checked)}
              style={{width: '20px', /* Adjust size */
              height: '20px', /* Adjust size */}}
            />
            🔆 User Defined Forecast Days?
          </label>
          <br />
          {useCustomForecastDays && (
            <>
              <label>Number of days: </label>
              <select
                value={forecastDays}
                onChange={(e) => setForecastDays(e.target.value)}
              >
                <option value="15">15 days</option>
                <option value="270">270 days</option>
              </select>
            </>
          )}

        <div>
          <label>🔐 API Token*:</label>
          <br />
          <input type="password" value={token} onChange={(e) => setToken(e.target.value)} required />
        </div>
          </div>
          <div className="separator">OR</div>
          <div className="input-fields-right">
            <div className="input-field">
              <label>🏙️ City Name: <HelpBubble text="Enter the full city name, with special characters if applicable." /></label>
              <br />
              <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
            </div>
            <div className="input-field">
              <label>🌎 State: <HelpBubble text="Enter the two-letter abbreviation for your state (e.g., CA for California/US, SC for Santa Catarina/BR)." /></label>
              <br />
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
          </div>
        </div>

        <p>*: Required Field</p>
        <button type="submit" className="btn">Search 🔍</button>
      </form>

      {result && (
        <div className="weather-report-container">
          <h3>Weather Report for {result.name || cityName || 'City'} (City ID: {result.id || cityId})</h3>
          {weatherData.map(day => (
            <div key={day.date} className="weather-day-container">
              <h4>{day.date}</h4>
              <p><strong>Weather Explanation:</strong> {day.weatherExplanation}</p>
              <div className="weather-day-table-container">
                <table className="weather-day-table">
                  <thead className="weather-day-table thead">
                    <tr>
                      {weatherColumns.map(column => (
                        <th key={column.Header}>{column.Header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {day.details.map((detail, index) => (
                      <tr key={index}>
                        {weatherColumns.map(column => (
                          <td key={column.Header}>{detail[column.accessor]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>}
      <br></br>
    </div>
  );
}
