import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const cssClass =
  "container grid grid-cols-12 justify-center bg-green-300 max-w-7xl gap-4 mx-auto";

const SearchItems = () => {
  return (
    <div className={cssClass}>
      <SearchBar />
      <Dropdown />
    </div>
  );
};

export default SearchItems;
