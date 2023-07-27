import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/appContext";

export default function Navigation() {
  const { user, parsedUser, logoutUser } = useContext(AppContext);

  const location = useLocation();

  return (
    <>
      <header className="py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl text-black font-semibold">
            Signup Login Logic
          </h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link to="/login">
                {location.pathname === "/" ? (
                  <> {user ? `${parsedUser?.fullname}` : "Login"}</>
                ) : (
                  ""
                )}
              </Link>
            </li>
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
