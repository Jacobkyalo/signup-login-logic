import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export default function Profile() {
  const { parsedUser } = useContext(AppContext);

  return (
    <>
      <section className="my-16">
        <h2 className="font-semibold text-xl sm:text-3xl mb-6">
          Welcome back 👋{" "}
          <span className="text-blue-600">{parsedUser?.fullname}</span>
        </h2>
        <p>
          Email: <span className="text-blue-600">{parsedUser?.email}</span>
        </p>
        <p>
          Password:{" "}
          <span className="text-blue-600">{parsedUser?.password}</span>
        </p>
      </section>
    </>
  );
}
