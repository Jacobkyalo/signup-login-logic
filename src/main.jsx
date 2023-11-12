import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Login from "./pages/login.jsx";
import Shop from "./pages/shop.jsx";
import SingleProduct from "./pages/single-product.jsx";
import Cart from "./pages/cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index element={<Shop />} />
      <Route path="/:id" index element={<SingleProduct />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/profile" index element={<Profile />} />
      <Route path="/register" index element={<Home />} />
      <Route path="/cart" index element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
