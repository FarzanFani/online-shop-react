import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";

const cssClass =
  "container grid grid-cols-12 justify-center max-w-7xl gap-4 mx-auto mt-10";

const SearchItems = () => {
  const cartCtx = useContext(CartContext);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const api: string = "https://fakestoreapi.com/products/categories";
    const fetchData = async (url: string) => {
      try {
        const respose = await fetch(url);
        if (!respose.ok) {
          throw new Error("https error! status" + respose.status);
        }
        const result = await respose.json();
        setCategories(result);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData(api);
  }, []);

  return (
    <div className={cssClass}>
      <SearchBar />
      <Dropdown options={categories} />
    </div>
  );
};

export default SearchItems;
