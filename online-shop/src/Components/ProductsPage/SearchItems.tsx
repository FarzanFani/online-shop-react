import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const cssClass =
  "container grid grid-cols-12 justify-center max-w-7xl gap-4 mx-auto mt-10";

const SearchItems = () => {
  return (
    <div className={cssClass}>
      <SearchBar />
      <Dropdown />
    </div>
  );
};

export default SearchItems;
