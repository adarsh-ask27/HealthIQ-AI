import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RiskCard from "./RiskCard";
import RiskChart from "./RiskChart";

function Simulator({ extractedData }) {
  const [data, setData] = useState({
    age: 50,
    cholesterol: 240,
    bp: 150,
    bmi: 30,
    smoking: 1,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: Number(e.target.value) });
  };

  // ✅ FIXED simulate function (no circular JSON issue)
  const simulate = useCallback(async (customData = data) => {
  try {
    const res = await axios.post(
      "https://healthiq-ai-backend.onrender.com/simulate-risk",
      {
        ...customData,
        new_cholesterol: customData.cholesterol - 20,
        new_bp: customData.bp - 10,
        new_bmi: customData.bmi - 2,
        new_smoking: 0,
      }
    );

    setResult(res.data);
  } catch (error) {
    console.error("Simulation Error:", error);
    alert("Simulation failed");
  }
}, [data]);

  // ✅ Auto-fill from upload + auto simulate
  useEffect(() => {
  if (extractedData) {
    setData((prev) => {
      const updatedData = {
        ...prev,
        cholesterol: extractedData.cholesterol || prev.cholesterol,
        bp: extractedData.bp || prev.bp,
        bmi: extractedData.bmi || prev.bmi,
        smoking: extractedData.smoking || prev.smoking,
      };

      simulate(updatedData);
      return updatedData;
    });
  }
}, [extractedData, simulate]);

  return (
    <div>
      <div className="inputs">
        <input name="age" type="number" value={data.age} onChange={handleChange}/>
        <input name="cholesterol" type="number" value={data.cholesterol} onChange={handleChange}/>
        <input name="bp" type="number" value={data.bp} onChange={handleChange}/>
        <input name="bmi" type="number" value={data.bmi} onChange={handleChange}/>
      </div>

      {/* ✅ CRITICAL FIX HERE */}
      <button onClick={() => simulate()}>
        Simulate Future Risk
      </button>

      {result && (
        <>
          <RiskCard result={result}/>
          <RiskChart result={result}/>
        </>
      )}
    </div>
  );
}

export default Simulator;