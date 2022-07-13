import { HeroType } from "../../types/HeroType";
import { BsExclamationLg } from "react-icons/bs";
import React, { Suspense, useState } from "react";
import { objectEquals } from "../../utils/objectEquals";

import "./style.scss";
import { Link } from "react-router-dom";

const CardLinks = React.lazy(() => import("../cardLinks/index"));

type HeroCardProps = {
  hero: HeroType;
};

function HeroCard({ hero }: HeroCardProps) {
  const [linksOpen, setLinksOpen] = useState(false);

  const handleOpenLinks = () => setLinksOpen((s) => !s);
  return (
    <div className="HeroCardContainer">
      <Link to={`/character/${hero.id}`}>
        <img
          src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
      </Link>
      <div className="text">
        <span className="name">{hero.name}</span>
        <span className="details" onClick={handleOpenLinks}>
          <BsExclamationLg />
        </span>
        <Suspense fallback={<h1>Carregando</h1>}>
          <CardLinks Urls={hero.urls} open={linksOpen} />
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(HeroCard, (Prev, Next) =>
  objectEquals(Prev.hero, Next.hero)
);
