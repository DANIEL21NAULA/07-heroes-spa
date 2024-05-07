import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  const newName = name.toLowerCase().trim();

  if (newName.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
