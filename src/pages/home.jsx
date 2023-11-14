import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../contexts/appContext";

export default function Home() {
  const { registerUser } = useContext(AppContext);

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    registerUser(data.fullname, data.email, data.password);
  };

  return (
    <section className="my-20 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="block w-full max-w-lg border border-black rounded-lg py-6 px-4"
      >
        <div className="mb-6">
          <h2 className="font-semibold text-center text-2xl mb-3">Register</h2>
          <hr />
        </div>
        <div className="mb-3">
          <label htmlFor="fullname">
            <span className="mb-2 text-lg block">Fullname</span>
            <input
              type="text"
              id="fullname"
              className="block border border-black rounded-md py-3 px-4 w-full outline-0"
              placeholder="e.g. John Doe"
              name="fullname"
              {...register("fullname")}
            />
            <p className="text-sm mt-1 first-letter:capitalize text-red-600">
              {errors.fullname?.message}
            </p>
          </label>
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
        <div className="mb-3">
          <label htmlFor="confirmPassword">
            <span className="mb-2 text-lg block">Confirm password</span>
            <input
              type="password"
              id="confirmPassword"
              className="block border border-black rounded-md py-3 px-4 w-full outline-0 "
              placeholder="confirm your password"
              name="confirmPassword"
              {...register("confirmPassword")}
            />
            <p className="text-sm mt-1 first-letter:capitalize text-red-600">
              {errors.confirmPassword && "Passwords must match"}
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-md bg-black text-base text-white px-6 py-3 w-full my-6"
        >
          Register
        </button>
      </form>
    </section>
  );
}
