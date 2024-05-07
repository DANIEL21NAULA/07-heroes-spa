import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getHeroImageUrlById } from '../helpers';

const CharactersByHero = ({ alterEgo, characters }) => (
  // if( alter_ego === characters) return (<></>);
  // return(
  //   <p>{ characters }</p>
  // );

  alterEgo === characters
    ? (<></>)
    : (<p>{ characters }</p>)
);

export const HeroCard = ({
  id,
  superhero,
  alterEgo,
  firstAppearance,
  characters,
}) => {
  const heroImageUrl = useMemo(() => getHeroImageUrlById(id), [id]);
  // const charactersByHero = (<p>{ characters }</p>);
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>
              {/* {
                (alter_ego !== characters) && (charactersByHero)
              } */}
              <CharactersByHero characters={characters} alterEgo={alterEgo} />
              <p className="card-text">
                <small className="text-muted">{ firstAppearance }</small>
              </p>

              <Link to={`/hero/${id}`}>
                Más..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

CharactersByHero.propTypes = {
  alterEgo: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
