import { getHeroesByPublisher } from '../helpers';
import { HeroList } from '../index'

export const DcPage = () => {
  const heroes = getHeroesByPublisher('DC Comics');
  return (
    <>
      <h1>Dc Comics</h1>
      <HeroList publisher='DC Comics'/>
    </>
  );
}
