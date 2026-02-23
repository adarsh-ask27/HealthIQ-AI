import React from "react";
import Upload from "./components/Upload";
import Simulator from "./components/Simulator";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>HealthIQ AI</h1>
      <p>Understand. Predict. Prevent.</p>
      <Upload />
      <Simulator />
    </div>
  );
}

export default App;