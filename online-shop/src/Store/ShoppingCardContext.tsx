import { createContext, FC, ReactNode, useState, useEffect } from "react";
import Product from "../Models/Product";
import React, { useMemo } from "react";

type CartContextObj = {
  items: Product[];
  products: Product[];
  filteredList: Product[];
  api: string;
  updatedQuantityHandler: (id: number, amount: number, productList: Product[]) => any;
  removeSingleItemHandler: (id: number) => void;
  apiChangeHandler: (newApi: string) => void;
  filterQuery: (value: string) => void;
};

export const CartContext = createContext<CartContextObj>({
  items: [],
  products: [],
  filteredList: [],
  api: "https://fakestoreapi.com/products/",
  updatedQuantityHandler: () => undefined,
  removeSingleItemHandler: () => undefined,
  apiChangeHandler: () => undefined,
  filterQuery: () => undefined,
});

interface CartContextProviderProps {
  children: ReactNode;
}

const findItem = (itemList: Product[], id: number): number => {
  return itemList.findIndex((item) => item.id === id);
};

export const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [api, setApi] = useState<string>("https://fakestoreapi.com/products/");
  const [filteredList, setFilterList] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await fetch(api);
        if (!respose.ok) {
          throw new Error("https error! status" + respose.status);
        }
        const result = await respose.json();
        setProducts(result);
        setProducts((prevProduct) => {
          const updatedProduct = [...prevProduct];
          updatedProduct.map((item) => (item.quantity = 0));
          return updatedProduct;
        });
      } catch (error:any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api]);

  const updatedQuantityHandler = useMemo(
    () => (id: number, amount: number, originalItems: Product[]): void => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const updatedIndex = findItem(updatedItems, id);
        if (updatedIndex === -1) {
          const index = findItem(originalItems, id);
          const product: Product = originalItems[index];
          product.quantity += amount;
          return prevItems.concat(product);
        }
        const updatedItem = {
          ...updatedItems[updatedIndex],
        };
        updatedItem.quantity += amount;
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedIndex, 1);
        } else {
          updatedItems[updatedIndex] = updatedItem;
        }
        return updatedItems;
      });
    },
    []
  );

  const apiChangeHandler = useMemo(
    () => (newApi: string): void => {
      setApi(newApi);
    },
    []
  );

  const removeSingleItemHandler = useMemo(
    () => (id: number): void => {
      setItems((pervItems) => pervItems.filter((item) => item.id !== id));
    },
    []
  );

  useEffect(() => {
    const filterItem = (value: string): void => {
      if (value.trim().length > 0) {
        setFilterList(products.filter((p) => p.title.toLowerCase().includes(value.toLowerCase())));
      } else {
        setFilterList(products);
      }
    };
    filterItem(query);
  }, [products, query]);

  const filterQuery = useMemo(
    () => (value: string): void => {
      setQuery(value);
    },
    []
  );

  const contextValue: CartContextObj = {
    items,
    products,
    filteredList,
    api,
    updatedQuantityHandler,
    removeSingleItemHandler,
    apiChangeHandler,
    filterQuery,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
