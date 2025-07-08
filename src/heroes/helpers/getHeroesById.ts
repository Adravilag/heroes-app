import { heroes } from "../data/heroes";

export const getHeroesById = (id: number) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    throw new Error(`Hero with ID ${id} not found`);
  }

  return hero;
};
