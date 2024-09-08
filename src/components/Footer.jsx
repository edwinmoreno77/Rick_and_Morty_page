import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-lime-500 py-8" id="footer">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-semibold">About Us</h5>
            <p className="text-sm mt-2">Rick and Morty page.</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Quick Links</h5>
            <ul className="list-none mt-2 space-y-2">
              <li>
                <Link to={"/"} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/list"} className="hover:text-white">
                  List
                </Link>
              </li>
              <li>
                <Link to={"/search"} className="hover:text-white">
                  Search
                </Link>
              </li>
              <li>
                <Link to={"/favorites"} className="hover:text-white">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Contact Us</h5>
            <p className="text-sm mt-2">
              Email: info@example.com
              <br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
