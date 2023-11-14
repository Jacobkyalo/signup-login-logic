import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const location = useLocation();

  return (
    <div className="border borde-black border-opacity-30 rounded-md p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-24 object-contain w-full mb-4"
      />
      <div className="flex items-center justify-between">
        <Link to={`/${product.id}`}>
          <h3 className="font-semibold text-lg text-opacity-40">
            {product.title}
          </h3>
        </Link>
        <small className="block text-xs">{product.brand}</small>
      </div>
      <h4 className="my-4 font-bold text-3xl">$ {product.price}</h4>
      <p className="my-4">{product.description}</p>
      {location.pathname === "/cart" ? (
        <button
          type="button"
          className="py-3 px-8 bg-black text-white rounded-md w-full"
          onClick={() => removeFromCart(product.id, product)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          type="button"
          className="py-3 px-8 bg-black text-white rounded-md w-full"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
