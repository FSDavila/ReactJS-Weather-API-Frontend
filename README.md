# ReactJS Frontend for Weather API Integration

This ReactJS application Front-End will integrate with the Back-End (e.g. [FSDavila's Python Weather API Back-End](https://github.com/FSDavila/Python-Weather-API-Backend)) to offer the user form and interface needed to consume the Weather API's services:

- Weather Report API Integration  
- Retrieve City ID Integration  
- Register City ID for Token Integration  
- Support for V2 Weather API Endpoint (From the Back-End), that can search for cities using City Name and State directly when making weather report requests

- [![Vercel](https://vercel.com/button)](https://react-js-weather-api-frontend.vercel.app/)

- ![Weather Report Screen](https://github.com/user-attachments/assets/4d2ebe9d-1226-4ab9-a965-4f9e611fb37e)


### Technologies Used:

* [ReactJS] - A JavaScript library for building user interfaces.
* [Axios] - Promise based HTTP client for the browser and node.js.
* [Express] - With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
* [react-router-dom] - React Router is used for handling routing in your React application.
* [react-icons] - React Icons provides a library of icons that can be easily used in your React components.
* [react-select] - React Select is used for customizable select boxes.
* [react-table] - React Table is used for creating data tables. Used for the weather report tables.
* [react-tabs] - React Tabs provides tab functionality. Used for displaying the tabs with the different forms for usage.
* [webpack] - Webpack is a module bundler used for bundling JavaScript files and other assets. 

### Configuration and Variables

Required to have [NodeJS] installed in your machine to download dependencies for the project, also, you need to have a instance of the Back-End running as well.

| Variable  |                   Description                                                                  | 
| --------- | ---------------------------------------------------------------------------------------------- |
| API Token - In the Application | Token generated in the ClimaTempo Dashboard (https://advisor.climatempo.com.br/home/#!/tokens) |
| urlBackend - config.js | URL of the Weather API Back-End that is running on your machine (e.g."http://localhost:8000") |

### Execution

To run the example application, import the project into your preferred IDE and install the dependencies. We used ReactJS version 18.0.0 for development, and latest stable NPM version for installing dependencies and running the application.

##### Comamand lines:

**Install the dependencies using the following command:**

    - npm install


**Run the application**

    - npm start
