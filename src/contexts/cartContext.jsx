/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const params = useParams();

  // fetch products
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  // fetch single product
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    };

    getProduct();
  }, [params.id]);

  // add to cart
  const addToCart = (pdt) => {
    setCart([...cart, pdt]);
    alert(`${pdt.title} added to cart`);
  };

  // remove from cart
  const removeFromCart = (pdtId, pdt) => {
    const productsRemained = cart.filter((c) => c.id !== pdtId);
    setCart(productsRemained);
    alert(`${pdt.title} removed from cart`);
  };

  const values = { products, product, cart, addToCart, removeFromCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
