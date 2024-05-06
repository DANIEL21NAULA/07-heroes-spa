import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map((hero) => (
          <HeroCard
            key={hero.hero.id}
            id={hero.id}
            superhero={hero.superhero}
            alterEgo={hero.alter_ego}
            firstAppearance={hero.first_appearance}
            characters={hero.characters}
          />
        ))
      }
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
