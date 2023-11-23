import { dropDownStyle as style } from "../Header/headerStyle";
import { CartContext } from "../../Store/ShoppingCardContext";
import React, { useContext, useCallback } from "react";

const Dropdown: React.FC<{ options: string[] }> = (props) => {

  const cartCtx = useContext(CartContext);

  const selectChangeHandler = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const api =
      value === "All"
        ? "https://fakestoreapi.com/products/"
        : `https://fakestoreapi.com/products/category/${value}`;

    cartCtx.apiChangeHandler(api);
  },[cartCtx.api]);

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
