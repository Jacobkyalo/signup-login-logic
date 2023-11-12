import { useContext } from "react";
import ProductCard from "../components/product-card";
import { CartContext } from "../contexts/cartContext";

export default function Shop() {
  const { products } = useContext(CartContext);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {products.map((product, idx) => {
          return <ProductCard key={idx} product={product} />;
        })}
      </section>
    </>
  );
}
