import React from "react";
import logo from "../../Assests/logo.png";
import PersonalInfo from "./PersonalInfo";
import { headerStyle as style } from "./headerStyle";

const divClasses =
  "container w-full bg-gray-800 flex justify-between items-center md:h-20 flex-wrap gap-y-2";

const spanClasses = "p-2 bg-red-600 rounded-full inline-block w-10 text-center";
const paraClasses = "me-3 font-bold text-white";

const speccifyContent = (): React.ReactNode => {
  const pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (pageWidth >= 500) {
    return (
      <div className={style.headerContainer}>
        <PersonalInfo />
        <img src={logo} alt="Page Logo" />
        <p className={style.cartText}>
          Cart <span className={style.headerBadge}>5</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className={style.headerContainer}>
        <img src={logo} alt="Page Logo" />
        <PersonalInfo />
        <p className={style.cartText}>
          Cart <span className={style.headerBadge}>5</span>
        </p>
      </div>
    );
  }
};

const Header = () => {
  return <>{speccifyContent()}</>;
};

export default Header;
