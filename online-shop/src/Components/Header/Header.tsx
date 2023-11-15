import React from "react";
import logo from "../../Assests/logo.png";
import PersonalInfo from "./PersonalInfo";

const divClasses =
  "container bg-gray-200 flex justify-between items-center h-20";

const spanClasses = "p-2 bg-red-600 rounded-full inline-block w-10 text-center";
const paraClasses = "me-3";

const Header = () => {
  return (
    <>
      <div className={divClasses}>
        <PersonalInfo />
        <img src={logo} alt="Page Logo" />
        <p className={paraClasses}>
          Cart <span className={spanClasses}>5</span>
        </p>
      </div>
    </>
  );
};

export default Header;
