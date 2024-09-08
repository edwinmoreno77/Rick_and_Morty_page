import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState(null);

  const fetchData = async (search) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();

      setdata(data.results);
    } catch (error) {
      console.log("Error capturado en el fetch", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <h1 className="text-center mt-3 text-3xl font-bold">
          Search Character by Name
        </h1>
        <div className="flex m-2 p-2 justify-center">
          <input
            className="form-input w-full md:w-1/3 p-1 border rounded shadow-lg"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={() => fetchData(search)}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 transition ease-in-out">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
