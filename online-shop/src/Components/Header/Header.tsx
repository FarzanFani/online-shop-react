import React from "react";
import logo from "../../assets/logo.png";
import PersonalInfo from "./PersonalInfo";
import { headerStyle as style } from "./headerStyle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";

const speccifyContent = (count: number): React.ReactNode => {
  const pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (pageWidth >= 500) {
    return (
      <div className={style.headerContainer}>
        <PersonalInfo />
        <img src={logo} alt="Page Logo" />
        <Link to={"shopping-cart"}>
          <p className={style.cartText}>
            Cart <span className={style.headerBadge}>{count}</span>
          </p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={style.headerContainer}>
        <img src={logo} alt="Page Logo" />
        <PersonalInfo />
        <Link to={"shopping-cart"}>
          <p className={style.cartText}>
            Cart <span className={style.headerBadge}>{count}</span>
          </p>
        </Link>
      </div>
    );
  }
};

const Header = () => {
  const { items } = useContext(CartContext);

  const calcItemLen = () =>
    items.reduce((prev, current) => prev + current.quantity, 0);

  return <>{speccifyContent(calcItemLen())}</>;
};

export default Header;
