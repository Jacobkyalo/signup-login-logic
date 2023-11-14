import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../contexts/appContext";

export default function Login() {
  const { loginUser } = useContext(AppContext);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    loginUser(data.email, data.password);
  };

  return (
    <section className="my-20 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
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
              name="email"
              {...register("email")}
            />
            <p className="text-sm mt-1 first-letter:capitalize text-red-600">
              {errors.email?.message}
            </p>
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
              name="password"
              {...register("password")}
            />
            <p className="text-sm mt-1 first-letter:capitalize text-red-600">
              {errors.password?.message}
            </p>
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
