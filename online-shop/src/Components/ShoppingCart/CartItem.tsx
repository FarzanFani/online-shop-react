import Product from "../../Models/Product";
import { cartItemStyles as style } from "./ShoppingCartStyles";
import { CartContext } from "../../Store/ShoppingCardContext";
import React, { useContext } from "react";

const icon: React.ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash3-fill text-black hover:cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const cutString = (inputString: string, maxLength: number): string => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength) + "...";
  } else {
    return inputString;
  }
};

const calcTotalPrice = (quantity: number, price: number) => {
  return quantity * price;
};

const CartItem: React.FC<{ item: Product; cellNum: number }> = (props) => {
  const cartCtx = useContext(CartContext);

  const plusBtnHandler = () => {
    cartCtx.updatedQuantityHandler(props.item.id, 1, cartCtx.products);
  };

  const minusBtnHandler = () => {
    cartCtx.updatedQuantityHandler(props.item.id, -1, cartCtx.products);
  };

  const iconClickHandler = () => {
    cartCtx.removeSingleItemHandler(props.item.id);
  };

  return (
    <tr className={style.tableRow}>
      <td className={style.tableCells}>{props.cellNum}</td>
      <td className={style.tableCells}>{cutString(props.item.title, 30)}</td>
      <td className={style.tableCells}>
        {cutString(props.item.description, 30)}
      </td>
      <td className={style.tableCells + style.quantityCell}>
        <button className={style.minusBtn} onClick={minusBtnHandler}>
          -
        </button>
        <span>{props.item.quantity}</span>
        <button className={style.plusBtn} onClick={plusBtnHandler}>
          +
        </button>
      </td>
      <td className={style.tableCells}>${props.item.price}</td>
      <td className={style.totalPriceCell}>
        <span className={style.priceValue}>
          ${calcTotalPrice(props.item.quantity, props.item.price).toFixed(2)}
        </span>
        <span className={style.trashIcon} onClick={iconClickHandler}>
          {icon}
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
