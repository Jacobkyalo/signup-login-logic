/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);

  const registerUser = (fullname, email, password) => {
    const userDetails = {
      fullname: fullname,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(userDetails));
    alert("Registered successfully");
    navigate("/login");
  };

  const loginUser = (email, password) => {
    if (!user) {
      alert("No user registered");
      return;
    } else if (parsedUser.email !== email || parsedUser.email === null) {
      alert("User email not registered");
      return;
    } else if (
      parsedUser.password !== password ||
      (parsedUser.email === parsedUser.password) === null
    ) {
      alert("Invalid password");
      return;
    } else {
      console.log(email, password);
      navigate("/profile");
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const values = {
    user,
    parsedUser,
    registerUser,
    loginUser,
    logoutUser,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
