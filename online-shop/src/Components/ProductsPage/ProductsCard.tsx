import { ProductCardsStyle as style } from "./cssStyle";

const ProductCard = () => {
  return (
    <div className={style.cardContainer}>
      <img
        className={style.picture}
        src="https://picsum.photos/200"
        alt="Card Image"
      />
      <div className={style.bodyContainer}>
        <span className={style.title}>Card Title</span>
        <p className={style.description}>
          Card Description goes here. You can provide a brief overview of the
          content.
        </p>
      </div>
      <div className={style.pricaButtonContainer}>
        <span className={style.price}>$19.99</span>
        <button className={style.button}>Learn More</button>
      </div>
    </div>
  );
};

export default ProductCard;
