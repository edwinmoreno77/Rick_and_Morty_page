import { Link } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mt-5 min_vh">
        <h1 className="text-center">Welcome</h1>
        <h3>Rick and Morty Page</h3>
        <Link className="btn btn-success mt-3" to={"/list"}>
          List
        </Link>
      </div>
      <Footer />
    </>
  );
};
