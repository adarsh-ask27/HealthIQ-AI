function RiskCard({ result }) {

  const riskPercent = result.current_risk_percent;

  // Dynamic color based on risk
  let color = "#16a34a"; // green

  if (riskPercent > 30) color = "#dc2626"; // red
  else if (riskPercent > 15) color = "#f59e0b"; // orange

  return (
    <div style={{
      marginTop: "20px",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
      background: "white"
    }}>

      <h2 style={{ color }}>
        Risk Level: {result.risk_level} ({riskPercent}%)
      </h2>

      <p>
        Improvement after lifestyle changes:
        <strong> {result.improvement_percent}%</strong>
      </p>

      {/* Clinical Message */}
      <p>
        {result.clinical_message}
      </p>

      {/* Health Literacy Mode */}
      <p>
        {result.risk_level === "High" &&
          "You have elevated cardiovascular risk. Immediate lifestyle intervention is recommended."}

        {result.risk_level === "Moderate" &&
          "Your risk is moderate. Preventive lifestyle changes can significantly reduce long-term complications."}

        {result.risk_level === "Low" &&
          "Your risk is currently low. Maintaining healthy habits is important."}
      </p>

      {/* Confidence Score (Optional) */}
      {result.confidence_score && (
        <p>
          Model Confidence: <strong>{result.confidence_score}%</strong>
        </p>
      )}

      {/* Recommendations Section */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div style={{ marginTop: "15px" }}>
          <h4>Recommended Actions:</h4>
          <ul>
            {result.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default RiskCard;