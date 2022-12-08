import React from "react";
import './firebase-init'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/index";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
