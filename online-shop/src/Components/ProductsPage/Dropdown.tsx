import { dropDownStyle as style } from "../Header/headerStyle";
import { CartContext } from "../../Store/ShoppingCardContext";
import { useContext } from "react";

const Dropdown: React.FC<{ options: string[] }> = (props) => {
  const cartCtx = useContext(CartContext);

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const api =
      value === "All"
        ? "https://fakestoreapi.com/products/"
        : `https://fakestoreapi.com/products/category/${value}`;

    cartCtx.apiChangeHandler(api);
  };

  return (
    <select className={style.select} onChange={selectChangeHandler}>
      <option value="All">All</option>
      {props.options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
