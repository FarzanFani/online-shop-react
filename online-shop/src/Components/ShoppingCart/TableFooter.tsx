import { cartTableStyle as style } from "./ShoppingCartStyles";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";
import Product from "../../Models/Product";

const calcTotalPrice = (items: Product[]): number => {
  return items.reduce(
    (total, currentItem) => currentItem.quantity * currentItem.price + total,
    0
  );
};

const TableFooter: React.FC = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { items } = useContext(CartContext);

  return (
    <tfoot>
      <tr className={style.tfRow}>
        <th scope="row" className={style.totalText}>
          Total
        </th>
        <td colSpan={windowSize.width > 550 ? 4 : 2}></td>
        <td className={style.totalPrice}>$ {calcTotalPrice(items).toFixed(2)}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
