import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={`/lista`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Lista
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={`/favoritos`}
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
