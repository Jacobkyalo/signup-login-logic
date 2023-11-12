import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import AppContextProvider from "./contexts/appContext";
import CartContextProvider from "./contexts/cartContext";

export default function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <div className="container">
          <Navigation />
          <Outlet />
        </div>
      </CartContextProvider>
    </AppContextProvider>
  );
}
