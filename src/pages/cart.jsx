import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import ProductCard from "../components/product-card";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart?.length < 1 ? (
        <p>Your cart is empty </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {cart?.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })}
        </section>
      )}
    </>
  );
}
