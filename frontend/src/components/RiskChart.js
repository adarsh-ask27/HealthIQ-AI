import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function RiskChart({ result }) {
  const data = [
    { name: "Current", value: result.current_risk_percent },
    { name: "Improved", value: result.new_risk_percent },
  ];

  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  );
}

export default RiskChart;