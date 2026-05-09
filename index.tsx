/**
 * Entry point for the React application.
 * Bootstraps the React tree and mounts the root `App` component to the DOM.
 * Utilizes React.StrictMode for highlighting potential problems in the application.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
