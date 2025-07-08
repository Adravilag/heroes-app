export const getHealthIcon = (healthType: string) => {
  const icons: { [key: string]: string } = {
    Low: "💔",
    Medium: "❤️",
    High: "💚",
    "Very High": "💙",
  };
  return icons[healthType] || "❓";
};
