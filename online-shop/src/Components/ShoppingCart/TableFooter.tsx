import { cartTableStyle as style } from "./ShoppingCartStyles";
import React, { useContext } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";
import Product from "../../Models/Product";

const calcTotalPrice = (items: Product[]): number => {
  return items.reduce(
    (total, currentItem) => currentItem.quantity * currentItem.price + total,
    0
  );
};

const TableFooter: React.FC = () => {
  
  const { items } = useContext(CartContext);

  return (
    <tfoot>
      <tr className={style.tfRow}>
        <th scope="row" className={style.totalText}>
          Total
        </th>
        <td colSpan={4}></td>
        <td className={style.totalPrice}>
          $ {calcTotalPrice(items).toFixed(2)}
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
