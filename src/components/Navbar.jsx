import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-lime-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className=" text-xl font-semibold hover:text-white">
          Home
        </Link>
        <button className="text-white block lg:hidden" type="button">
          <span className="text-lime-500">menu</span>
        </button>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to={`/list`} className="hover:text-white transition-colors">
              List
            </Link>
          </li>
          <li>
            <Link
              to={`/favorites`}
              className="hover:text-white transition-colors"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link to={`/search`} className="hover:text-white transition-colors">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
