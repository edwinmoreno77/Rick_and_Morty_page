import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export const Favorites = () => {
  const { store } = useContext(Context);
  const { favorites } = store;

  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <h1 className="text-center pt-3 text-4xl text-lime-500 font-bold underline decoration-lime-500 tracking-tight">
          Favorites
        </h1>
        {favorites.length === 0 ? (
          <h1 className="text-center pt-3 mt-28 text-8xl text-lime-500 font-bold decoration-lime-500 tracking-tight">
            Add favorites
          </h1>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
            {favorites.map((character) => (
              <Card key={character.id} item={character} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
