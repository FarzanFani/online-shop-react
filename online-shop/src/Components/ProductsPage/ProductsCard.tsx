import Product from "../../Models/Product";
import { ProductCardsStyle as style } from "./cssStyle";

const cutString = (inputString: string, maxLength: number): string => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength) + "...";
  } else {
    return inputString;
  }
};

const ProductCard: React.FC<{ product: Product }> = (props) => {
  return (
    <div className={style.cardContainer}>
      <img
        className={style.picture}
        src={props.product.image}
        alt="Card Image"
      />
      <div className={style.bodyContainer}>
        <span className={style.title}>
          {cutString(props.product.title, 25)}
        </span>
        <p className={style.description}>
          {cutString(props.product.description, 200)}
        </p>
      </div>
      <div className={style.pricaButtonContainer}>
        <span className={style.price}>${props.product.price}</span>
        <button className={style.button}>Add</button>
      </div>
    </div>
  );
};

export default ProductCard;
