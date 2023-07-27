import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import AppContextProvider from "./contexts/appContext";

export default function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </AppContextProvider>
  );
}
