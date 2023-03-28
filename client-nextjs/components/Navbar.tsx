import { AuthContext } from "@/context/authcontex";
import React, { useContext } from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const { user, setUser } = useContext(AuthContext);
  console.log("user", user);

  const login = () => {
    setUser({
      name: "viktor",
      email: "viktoremail",
    });
  };

  const logout = () => {
    setUser({});
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-full">
        <div className="relative flex py-2 center-items justify-between">
          <button>logo</button>
          <Link className="" href="/641b67ea0d89f06504e224c0">
            <button
              type="button"
              className="rounded-full bg-gray-800 py-1 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              login | signup
            </button>
          </Link>
          {/* className="text-sm front-semibold" */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
