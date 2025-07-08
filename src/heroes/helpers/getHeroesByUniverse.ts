import { heroes } from "../data/heroes";

export const getHeroesByUniverse = (universe: string) => {
  const validUniverses = ["Warcraft", "Starcraft", "Diablo", "Overwatch", "all"];
  if (!validUniverses.includes(universe)) {
    throw new Error(`Invalid universe: ${{universe}}`);
  }
  if (universe === "all") {
    return heroes;
  }

  return heroes.filter(hero => hero.universe === universe);
}