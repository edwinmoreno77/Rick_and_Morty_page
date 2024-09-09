import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousels } from "../components/Carousels";
import rickAndMortyDedoImg from "../assets/rickAndMortyDedoImg.png";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <main className="bg-gray-900 text-lime-500 p-5">
        <div className="text-center mt-2 min_vh">
          <h1 className="text-center text-4xl font-bold hover:brightness-150">
            Welcome
          </h1>
          <h3 className="text-2xl my-4 hover:brightness-150">
            Rick and Morty Page
          </h3>
          <Link
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-5"
            to={"/list"}
          >
            List
          </Link>
          <div className="flex justify-center items-center mt-32 p-5">
            <img
              className="hover:brightness-110 animate-bounce transition translate"
              src={rickAndMortyDedoImg}
              width={200}
              alt=""
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
