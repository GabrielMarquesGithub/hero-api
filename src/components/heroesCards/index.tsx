import { HeroType } from "../../types/HeroType";
import HeroCard from "../heroCard";

import "./style.scss";

type HeroesCardsProps = {
  heroes: HeroType[];
  handleShowMore: () => void;
  showButton: boolean;
};

function HeroesCards({ heroes, handleShowMore, showButton }: HeroesCardsProps) {
  const display = showButton ? { display: "flex" } : { display: "none" };

  return (
    <>
      <section className="HeroesContainer">
        {heroes?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </section>
      <div style={display} className="buttonContainer">
        <button onClick={handleShowMore}>Carregar Mais</button>
      </div>
    </>
  );
}

export default HeroesCards;
