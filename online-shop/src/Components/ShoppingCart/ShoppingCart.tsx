import CartTable from "./CartTable";
import { ShoppingCartStyle as style } from "./ShoppingCartStyles";

const ShoppingCart = () => {
  return (
    <div className={style.container}>
      <CartTable />
    </div>
  );
};

export default ShoppingCart;
