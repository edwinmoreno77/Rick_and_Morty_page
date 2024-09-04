import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <h1 className="text-center">Bienvenido</h1>
        <h3>Pagina Rick and Morty</h3>
        <Link className="btn btn-success" to={"/lista"}>
          ver lista
        </Link>
      </div>
    </>
  );
};
