import { createContext, useContext, useState, ReactNode } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
}

export const CartContext = createContext<ICartProviderData>(
  {} as ICartProviderData
);

export const CartProvider = ({ children }: ICartProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    setCart([...cart, product]);
  };

  const removeProduct = (product: IProduct) => {
    const newCart = cart.filter((element) => element.title !== product.title);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
// export const useCart = () => useContext(CartContext);
