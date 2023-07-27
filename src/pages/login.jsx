import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <section className="my-20 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="block w-full max-w-lg border border-black rounded-lg py-6 px-4"
      >
        <div className="mb-6">
          <h2 className="font-semibold text-center text-2xl mb-3">Login</h2>
          <hr />
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            <span className="mb-2 text-lg block">Email address</span>
            <input
              type="email"
              id="email"
              className="block border border-black rounded-md py-3 px-4 w-full outline-0"
              placeholder="e.g. johndoe@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <span className="mb-2 text-lg block">Password</span>
            <input
              type="password"
              id="password"
              className="block border border-black rounded-md py-3 px-4 w-full outline-0 "
              placeholder="your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button
          type="submit"
          className="rounded-md bg-black text-base text-white px-6 py-3 w-full my-6"
        >
          Login
        </button>
      </form>
    </section>
  );
}
