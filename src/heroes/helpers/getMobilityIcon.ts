export const getMobilityIcon = (mobility: string) => {
  const icons: { [key: string]: string } = {
    Low: "🐌",
    Medium: "🚶",
    High: "🏃",
    "Very High": "💨",
  };
  return icons[mobility] || "❓";
};