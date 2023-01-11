import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary.jsx";

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);