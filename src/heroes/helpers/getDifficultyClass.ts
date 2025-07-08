export const getDifficultyClass = (difficulty: string) => {
  const classes: { [key: string]: string } = {
    Easy: "hero-difficulty-badge easy",
    Medium: "hero-difficulty-badge medium",
    Hard: "hero-difficulty-badge hard",
    "Very Hard": "hero-difficulty-badge very-hard",
  };
  return classes[difficulty] || "hero-difficulty-badge";
};
