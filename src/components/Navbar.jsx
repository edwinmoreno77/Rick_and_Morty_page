import { Link } from "react-router-dom";
import navbarRM from "../assets/navbarRM.png";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-lime-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className=" text-xl font-semibold hover:text-lime-300">
          <img
            className="brightness-90 hover:brightness-125 transition ease-in-out duration-300"
            src={navbarRM}
            width={50}
            alt=""
          />
        </Link>
        <button className="text-white block lg:hidden" type="button">
          <span className="text-lime-500">menu</span>
        </button>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link
              to={`/list`}
              className="hover:text-lime-300 transition-colors"
            >
              List
            </Link>
          </li>
          <li>
            <Link
              to={`/favorites`}
              className="hover:text-lime-300 transition-colors"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to={`/search`}
              className="hover:text-lime-300 transition-colors"
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
