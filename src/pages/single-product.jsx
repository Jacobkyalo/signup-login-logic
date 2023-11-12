import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import ProductCard from "../components/product-card";

export default function SingleProduct() {
  const { product } = useContext(CartContext);

  return (
    <>
      <ProductCard product={product} />
    </>
  );
}
