import React, { createContext, FC, ReactNode } from "react";
import Product from "../Models/Product";

type CartContextObj = {
  items: Product[];
};

export const CartContext = createContext<CartContextObj>({
  items: [],
});

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: FC<CartContextProviderProps> = ({
  children,
}) => {
  return (
    <CartContext.Provider value={{ items: [] }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
