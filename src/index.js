import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

const container = document.getElementById('root'); // Change 'app' to 'root'
if (container) {
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App tab="home" />);
} else {
    console.error('Element with id "root" not found in the DOM');
}
