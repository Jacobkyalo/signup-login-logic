import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/appContext";

export default function Navigation() {
  const { user, logoutUser } = useContext(AppContext);

  const location = useLocation();

  return (
    <>
      <header className="py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl text-black font-bold">
            Simple Shop
          </h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-x-4">
            {!user ? (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </>
            )}
            {location.pathname === "/profile" ? (
              <li>
                <button
                  type="button"
                  onClick={logoutUser}
                  className="rounded-md bg-black text-base text-white px-6 py-3"
                >
                  Logout
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
