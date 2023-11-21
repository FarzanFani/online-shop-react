class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  quantity: number;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number,
    quantity: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
}

export default Product;
