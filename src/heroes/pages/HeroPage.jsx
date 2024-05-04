import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById, getHeroImageUrlById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById( id ), [ id]);

  const heroImageUrl = useMemo(() => getHeroImageUrlById( id ), [ id]);

  const handleNavigateBack = () => {
    navigate(-1);
  }
  
  if(!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ heroImageUrl }
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className='list-group-item'>
            <b>Alter ego:</b>
            &nbsp;{ hero.alter_ego }
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b>
            &nbsp;{ hero.publisher }
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b>
            &nbsp;{ hero.first_appearance }
          </li>
        </ul>

        <h5 className="mt-3">Charactes</h5>
        <p>{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={ handleNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
