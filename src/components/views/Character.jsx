import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export const Character = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
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

      setdata(data);
    } catch (error) {
      console.log("Error capturado en el fetch", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="container-fluid min_vh">
        <div className="row">
          <div className="col-12 col-md-5 p-2">
            <img src={data?.image} className="card-img-top rounded" alt="..." />
          </div>
          <div className="col-12 col-md-7 text-center ps-5">
            <h3 className="card-title my-5">{data?.name}</h3>
            <p className="card-text">id: {data?.id}</p>
            <p className="card-text">Species: {data?.species}</p>
            <p className="card-text">Gender: {data?.gender}</p>
            <p className="card-text">Status: {data?.status}</p>
            <p className="card-text">Origin: {data?.origin.name}</p>
            <p className="card-text">Location: {data?.location.name}</p>
            <Link to={`/list`} className="btn mt-5 btn-success">
              Volver
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
