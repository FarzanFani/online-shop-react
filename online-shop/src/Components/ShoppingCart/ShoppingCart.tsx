import CartTable from "./CartTable";
import { ShoppingCartStyle as style } from "./ShoppingCartStyles";

const ShoopingCart = () => {
  return (
    <div className={style.container}>
      <CartTable />
    </div>
  );
};

export default ShoopingCart;
