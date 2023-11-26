import { cartTableStyle as style } from "./ShoppingCartStyles";
import React, { useState, useEffect } from "react";

const TableHeader: React.FC = () => {
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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ss = "w-full bg-gray-800";
  return (
    <thead className={ss}>
      <tr className={ss}>
        {windowSize.width > 550 && <th className={style.tableHeader}>Number</th>}
        <th className={style.tableHeader}>Title</th>
        {windowSize.width > 550 && <th className={style.tableHeader}>Description</th>}
        <th className={style.tableHeader}>Quantity</th>
        <th className={style.tableHeader}>Price</th>
        <th className={style.tableHeader}>Total Price</th>
      </tr>
    </thead>
  );
};

export default React.memo(TableHeader);
