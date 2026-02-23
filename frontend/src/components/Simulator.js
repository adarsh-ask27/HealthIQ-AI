import React, { useState } from "react";
import axios from "axios";
import RiskCard from "./RiskCard";
import RiskChart from "./RiskChart";

function Simulator() {
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

  const simulate = async () => {
    const res = await axios.post(
      "http://localhost:8000/simulate-risk",
      {
        ...data,
        new_cholesterol: data.cholesterol - 20,
        new_bp: data.bp - 10,
        new_bmi: data.bmi - 2,
        new_smoking: 0,
      }
    );
    setResult(res.data);
  };

  return (
    <div>
      <div className="inputs">
        <input name="age" type="number" value={data.age} onChange={handleChange}/>
        <input name="cholesterol" type="number" value={data.cholesterol} onChange={handleChange}/>
        <input name="bp" type="number" value={data.bp} onChange={handleChange}/>
        <input name="bmi" type="number" value={data.bmi} onChange={handleChange}/>
      </div>

      <button onClick={simulate}>Simulate Future Risk</button>

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