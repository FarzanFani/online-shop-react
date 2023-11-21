import { searchBarStyle as style } from "./cssStyle";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const cartCtx = useContext(CartContext);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // cartCtx.filterItem(input);
    cartCtx.filterQuery(value);
  };

  return (
    <input
      type="text"
      name="search-bar"
      id="search-bar"
      className={style.searchBox}
      placeholder="Serach..."
      onChange={onInputChange}
    />
  );
};

export default SearchBar;
