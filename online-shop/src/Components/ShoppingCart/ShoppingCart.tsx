import CartTable from "./CartTable";
import { ShoppingCartStyle as style } from "./ShoppingCartStyles";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div className={style.container}>
      <Link to={"/"}>
        <p className={style.homePageBtn}>Home Page</p>
      </Link>
      <CartTable />
    </div>
  );
};

export default ShoppingCart;
