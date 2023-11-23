import ProductCardsContainer from "../Components/ProductsPage/ProductCardsContainer";
import SearchItems from "../Components/ProductsPage/SearchItems";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <SearchItems />
      <ProductCardsContainer />
    </>
  );
};

export default HomePage;
