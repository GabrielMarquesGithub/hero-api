import { useEffect, useReducer, useState } from "react";
import HeroesCards from "../../components/heroesCards";
import Loading from "../../components/loading";
import SearchBar from "../../components/searchBar";
import { useFetch } from "../../hooks/useFetch";
import { HeroType } from "../../types/HeroType";
import { objectEquals } from "../../utils/objectEquals";
import reducerAction from "../../utils/reducerAction";

import "./style.scss";

type DataType = {
  data: {
    results: HeroType[];
    total: number;
  };
};
type ParamsType = {
  limit?: string;
  orderBy?: string;
  offset?: string;
  nameStartsWith?: string;
};
type StateType = {
  heroesShown: HeroType[] | null;
  params: ParamsType;
};
type Action = {
  type: actionKind;
  payload: unknown;
};

const initialParams = {
  limit: "20",
  orderBy: "-modified",
  offset: "68",
};

const initialState: StateType = {
  heroesShown: null,
  params: initialParams,
};

enum actionKind {
  setHeroesShown = "SET_HEROES_SHOWN",
  setItemsToSkip = "SET_ITEMS_TO_SKIP",
  setSearchValue = "SET_SEARCH_VALUE",
}

const reducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;

  switch (type) {
    //setando items a serem mostrados
    case actionKind.setHeroesShown:
      return {
        ...state,
        heroesShown: objectEquals(payload, state.heroesShown)
          ? state.heroesShown
          : payload && state.heroesShown
          ? [...state.heroesShown, ...(payload as HeroType[])]
          : [],
      };
    //calcular items para dar skip
    case actionKind.setItemsToSkip:
      return {
        ...state,
        params: {
          ...state.params,
          offset: Number(
            Number(state.params.offset) + Number(payload)
          ).toString(),
        },
      };
    //inserindo searchValue e restando pagina
    case actionKind.setSearchValue:
      return {
        ...state,
        params:
          payload === ""
            ? {
                ...initialParams,
                offset: "68",
              }
            : {
                ...initialParams,
                nameStartsWith: payload as string,
                offset: "0",
              },
        heroesShown: [],
      };

    default:
      return state;
  }
};

function Home() {
  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { heroesShown, params } = state;
  //request
  const { data, loading } = useFetch<DataType>("/characters", params);
  //states
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    dispatch(reducerAction(actionKind.setHeroesShown, data?.data.results));
  }, [data?.data.results]);
  useEffect(() => {
    if (loading) return setShowButton(false);
    if (heroesShown && data && heroesShown.length < data.data.total) {
      return setShowButton(true);
    }
    return setShowButton(false);
  }, [loading, heroesShown]);

  const handleShowMore = () =>
    dispatch(reducerAction(actionKind.setItemsToSkip, 20));
  const handleSearch = (searchValue: string) =>
    dispatch(reducerAction(actionKind.setSearchValue, searchValue));

  return (
    <main className="HomeContainer">
      <section className="SearchContainer">
        <div className="Presentation">
          <h1>
            <span>Bem-vindo ao </span>
            <span>HeroApi</span>
            <br />
            <span>Veja seus </span>
            <span>heróis favoritos</span>
          </h1>
        </div>
        <SearchBar handleSearch={handleSearch} />
      </section>
      {heroesShown && (
        <HeroesCards
          heroes={heroesShown}
          handleShowMore={handleShowMore}
          showButton={showButton}
        />
      )}
      {!heroesShown?.length && !loading && (
        <div className="notFound">
          <span className="messageNotFound">Nenhum resultado encontrado !</span>
        </div>
      )}
      {loading && <Loading />}
    </main>
  );
}

export default Home;
