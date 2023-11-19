import CartItem from "./CartItem";
import { cartTableStyle as style } from "./ShoppingCartStyles";

const CartTable = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.tableHeader}>Number</th>
          <th className={style.tableHeader}>Title</th>
          <th className={style.tableHeader}>Description</th>
          <th className={style.tableHeader}>Quantity</th>
          <th className={style.tableHeader}>Price</th>
          <th className={style.tableHeader}>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <CartItem />
      </tbody>
      <tfoot>
        <tr className={style.tfRow}>
          <th scope="row" className={style.totalText}>
            Total
          </th>
          <td colSpan={4}></td>
          <td className={style.totalPrice}>21,000</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartTable;
