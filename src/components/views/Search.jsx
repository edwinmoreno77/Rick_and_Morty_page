import { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { Card } from "../ui/Card";
import { Footer } from "../ui/Footer";

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
      <div className="container-fluid min_vh">
        <h1 className="text-center mt-3">Search Character by name</h1>
        <div className="d-flex m-5 p-5">
          <input
            className="form-control"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={() => fetchData(search)}
          />
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
