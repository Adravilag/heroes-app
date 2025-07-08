export const getDamageTypeIcon = (damageType: string) => {
  const icons: { [key: string]: string } = {
    Physical: "⚡",
    Magical: "🔮",
    Mixed: "⚡🔮",
  };
  return icons[damageType] || "❓";
};