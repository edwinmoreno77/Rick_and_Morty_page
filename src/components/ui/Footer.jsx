import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p className="fw-lighter">Rick and Morty page.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/list"} className="text-light">
                  List
                </Link>
              </li>
              <li>
                <Link to={"/Search"} className="text-light">
                  Search
                </Link>
              </li>
              <li>
                <Link to={"/favorites"} className="text-light">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p className="fw-lighter">
              Email: info@example.com
              <br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="fw-lighter mb-0">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
