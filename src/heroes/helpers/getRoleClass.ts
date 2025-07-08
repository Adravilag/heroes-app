export const getRoleIcon = (role: string) => {
  const roleIcons: { [key: string]: string } = {
    Assassin: "⚔️",
    Warrior: "🛡️",
    Support: "❤️",
    Specialist: "⭐",
  };
  return roleIcons[role] || "❓";
};
