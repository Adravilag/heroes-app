export const getRoleClass = (role: string) => {
  const classes: { [key: string]: string } = {
    Assassin: "hero-role-badge assassin",
    Warrior: "hero-role-badge warrior",
    Support: "hero-role-badge support",
    Specialist: "hero-role-badge specialist",
  };
  return classes[role] || "hero-role-badge";
};
