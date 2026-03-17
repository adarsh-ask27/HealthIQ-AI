import React, { useState } from "react";
import Upload from "./components/Upload";
import Simulator from "./components/Simulator";

function App() {
  const [extractedData, setExtractedData] = useState(null);

  return (
    <div className="container">
      <h1>HealthIQ AI</h1>

      <Upload onDataExtracted={setExtractedData} />

      <Simulator extractedData={extractedData} />
    </div>
  );
}

export default App;