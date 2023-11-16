const cssClass =
  "border-2 border-black rounded-md h-9 col-span-6 md:col-span-3 ps-2";

const SearchBar = () => {
  return (
    <input
      type="text"
      name="search-bar"
      id="search-bar"
      className={cssClass}
      placeholder="Serach..."
    />
  );
};

export default SearchBar;
