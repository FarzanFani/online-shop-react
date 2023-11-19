import ProductCard from "./ProductsCard";
import { cardsContainerStyle as style } from "./cssStyle";

const ProductCardsContainer = () => {
  return (
    <div className={style.container}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductCardsContainer;
