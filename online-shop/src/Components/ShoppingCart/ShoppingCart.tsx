import CartTable from "./CartTable";
import { ShoppingCartStyle as style } from "./ShoppingCartStyles";
import { Link } from "react-router-dom";
import React from "react";

const ShoppingCart: React.FC = () => {
  return (
    <>
    <Link to={"/"}>
        <p className={style.homePageBtn}>Home Page</p>
      </Link>
    <div className={style.container}>
      <CartTable />
    </div>
    </>
  );
};

export default ShoppingCart;
