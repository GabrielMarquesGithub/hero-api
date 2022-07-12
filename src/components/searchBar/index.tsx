import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

import "./style.scss";

type SearchBarProps = {
  handleSearch: (searchValue: string) => void;
};

function SearchBar({ handleSearch }: SearchBarProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const whenSearched = () => handleSearch(searchInput.current!.value);

  return (
    <div className="SearchBoxContainer">
      <input
        ref={searchInput}
        type="text"
        placeholder="Pesquise seu herói favorito..."
      />
      <button onClick={whenSearched}>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBar;
