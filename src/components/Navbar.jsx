import { Link } from "react-router-dom";
import navbarRM from "../assets/navbarRM.png";
import { useState } from "react";

export const Navbar = () => {
  const [hidden, sethidden] = useState(true);

  const handlerMenu = () => {
    sethidden(!hidden);
  };

  return (
    <nav className="bg-gray-900 p-4 text-lime-500">
      <div className="container mx-auto lg:flex items-center justify-between">
        <Link
          to={"/"}
          className="hidden lg:flex text-xl font-semibold hover:text-lime-300"
        >
          <img
            className="brightness-90 hover:brightness-125 transition ease-in-out duration-300"
            src={navbarRM}
            width={50}
            alt=""
          />
        </Link>
        <button
          onClick={handlerMenu}
          className={`${
            !hidden ? "mb-3 brightness-150" : ""
          }  text-white lg:mb-0 block lg:hidden`}
          type="button"
        >
          <span className="text-lime-500 text-2xl font-bold">Menu</span>
        </button>
        <ul className={`${hidden && "hidden"} lg:flex space-x-0 lg:space-x-4`}>
          <li>
            <Link to={`/`} className="hover:text-lime-300">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/list`} className="hover:text-lime-300">
              List
            </Link>
          </li>
          <li>
            <Link to={`/favorites`} className="hover:text-lime-300">
              Favorites
            </Link>
          </li>
          <li>
            <Link to={`/search`} className="hover:text-lime-300">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
