import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { AppContext } from "../contexts/appContext";
import ProductCard from "../components/product-card";

export default function Shop() {
  const { products } = useContext(CartContext);
  const { user } = useContext(AppContext);

  return (
    <>
      {!user ? (
        <div className="flex items-center justify-center flex-col h-96">
          <p className="mb-4 text-lg">
            You need to register or login to view shop products
          </p>
          <Link to="/login">
            <button
              type="button"
              className="py-3 px-8 bg-black text-white rounded-md w-full"
            >
              Login
            </button>
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {products.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })}
        </section>
      )}
    </>
  );
}
