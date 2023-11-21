import ProductCard from "./ProductsCard";
import { cardsContainerStyle as style } from "./cssStyle";
import { useState, useEffect, useContext } from "react";
import Product from "../../Models/Product";
import { CartContext } from "../../Store/ShoppingCardContext";

const ProductCardsContainer = () => {
  // const [products, setPtoducts] = useState<Product[]>();

  // useEffect(() => {
  //   const api: string = "https://fakestoreapi.com/products/";
  //   const fetchData = async (url: string) => {
  //     try {
  //       const respose = await fetch(url);
  //       if (!respose.ok) {
  //         throw new Error("https error! status" + respose.status);
  //       }
  //       const result = await respose.json();
  //       setPtoducts(result);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData(api);
  // }, []);

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
