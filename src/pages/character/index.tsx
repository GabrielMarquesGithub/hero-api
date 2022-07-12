import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { HeroType } from "../../types/HeroType";

import "./style.scss";

type DataType = {
  data: {
    results: HeroType[];
    total: number;
  };
};

function Character() {
  const { id } = useParams();

  const { data, loading } = useFetch(`/characters/${id}`);

  console.log(data);

  return (
    <div className="CharacterContainer">
      <h1>Em construção</h1>
    </div>
  );
}

export default Character;
