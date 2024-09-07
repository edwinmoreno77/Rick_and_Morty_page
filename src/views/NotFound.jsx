import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid min_vh">
        <div className="text-center mt-5">
          <h1>Not Found</h1>
          <Link className="btn btn-success mt-5" to={"/"}>
            Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
