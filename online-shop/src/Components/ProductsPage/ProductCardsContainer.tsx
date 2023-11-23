import ProductCard from "./ProductsCard";
import { cardsContainerStyle as style } from "./cssStyle";
import { useState, useEffect, useContext } from "react";
import Product from "../../Models/Product";
import { CartContext } from "../../Store/ShoppingCardContext";

import React from "react";

const ProductCardsContainer: React.FC = () => {
  const { filteredList } = useContext(CartContext);

  return (
    <div className={style.container}>
      {filteredList?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductCardsContainer;
