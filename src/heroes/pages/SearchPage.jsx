import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { query = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(query);

  const { searchText, onInputChange } = useForm({
    searchText: query,
  });

  const handleSearchSumit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length < 1) return;

    navigate(`?query=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSumit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            (query === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0)
                && (
                  <div className="alert alert-danger">
                    No found hero
                    &nbsp;
                    <b>{ query }</b>
                  </div>
                )
          } */}
          {
            (query === '' || (heroes.length === 0 && query.length > 0))
              && (
                <div className={`alert ${query === '' ? 'alert-primary' : 'alert-danger'} animate__animated animate__fadeIn`}>
                  {
                    query === ''
                      ? <>Search a hero</>
                      : (
                        <>
                          No found hero
                          &nbsp;
                          <b>{query}</b>
                        </>
                      )
                  }
                </div>
              )
          }
          {
            heroes.map((hero) => (
              <HeroCard
                key={hero.id}
                id={hero.id}
                superhero={hero.superhero}
                alterEgo={hero.alter_ego}
                firstAppearance={hero.first_appearance}
                characters={hero.characters}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
