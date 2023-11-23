import logo from "../../assets/logo.png";
import PersonalInfo from "./PersonalInfo";
import { headerStyle as style, smallerPageContainer as smallStyle } from "./headerStyle";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect, memo } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";

const speccifyContent = (count: number, size:number): React.ReactNode => {
  if (size >= 600) {
    return (
      <div className={style.headerContainer} >
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
      <div className={smallStyle.container}>
        <img src={logo} alt="Page Logo" className={smallStyle.image}/>
      <div className={style.headerContainer}>
        <PersonalInfo />
        <Link to={"shopping-cart"}>
          <p className={style.cartText}>
            Cart <span className={style.headerBadge}>{count}</span>
          </p>
        </Link>
      </div>
      </div>
    );
  }
};

const Header:React.FC = () => {
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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  const { items } = useContext(CartContext);

  const calcItemLen = () =>
    items.reduce((prev, current) => prev + current.quantity, 0);

  return <>{speccifyContent(calcItemLen(),windowSize.width)}</>;
};

export default memo(Header);
