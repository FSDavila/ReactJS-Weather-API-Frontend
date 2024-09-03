import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css'; // Custom styles
import 'react-tabs/style/react-tabs.css'; // Default react-tabs styles

import GetCityIdForm from './GetCityIdForm';
import RegisterCityForm from './RegisterCityForm';
import GetWeatherInfoForm from './GetWeatherInfoForm';
import Footer from './Footer';

import navyBg from './assets/navybg.png';
import logo from './assets/navylogo.png'; // Import your logo image

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="app-title">
        ⛅Weather Report React Application
        </h1>
        <p style={{boxSizing: "border-box", width: "100%", backgroundColor: "#082454", textAlign: "center"}}><img  src={logo} alt="Logo" className="logo" /></p>
        <h2 className="app-title-h2">
           A ClimaTempo API Integration
        </h2>
      </div>
      <Tabs 
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="tabs"
      >
        <TabList className="tab-list">
          <Tab className="tab" selectedClassName="tab--selected">🆔 Search City ID</Tab>
          <Tab className="tab" selectedClassName="tab--selected">📝 Register City Permission</Tab>
          <Tab className="tab" selectedClassName="tab--selected">🌤️ Weather Report by City</Tab>
        </TabList>

        <TabPanel 
          className="tab-panel"
          style={{ display: tabIndex === 0 ? 'block' : 'none',
          backgroundImage: `url(${navyBg})`,
          borderRadius: '12px', // Adjust the radius as needed
          padding: '20px', // Optional: Add padding for better visual appearance
          boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 4px 8px rgba(0,0,0,0.1)'
        }}
        >
          <GetCityIdForm />
        </TabPanel>
        <TabPanel 
          className="tab-panel"
          style={{ display: tabIndex === 1 ? 'block' : 'none',
          backgroundImage: `url(${navyBg})`,
          borderRadius: '12px', // Adjust the radius as needed
          padding: '20px', // Optional: Add padding for better visual appearance
          boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 4px 8px rgba(0,0,0,0.1)'
        }}
        >
          <RegisterCityForm />
        </TabPanel>
        <TabPanel 
          className="tab-panel"
          style={{ 
            display: tabIndex === 2 ? 'block' : 'none',
            backgroundImage: `url(${navyBg})`,
            borderRadius: '12px', // Adjust the radius as needed
            padding: '20px', // Optional: Add padding for better visual appearance
            boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <GetWeatherInfoForm />
        </TabPanel>
      </Tabs>
      <Footer/>
    </div>
  );
}

export default App;
