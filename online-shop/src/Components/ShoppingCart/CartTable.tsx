import { cartTableStyle as style } from "./ShoppingCartStyles";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const CartTable: React.FC = () => {
  return (
    <table className={style.table}>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </table>
  );
};

export default CartTable;
