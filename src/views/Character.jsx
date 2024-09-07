import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fd min_vh">
        <div className="row">
          <div className="col-12 col-md-5 p-2 d-flex justify-content-center">
            {data ? (
              <img
                src={data?.image}
                className="card-img-top rounded"
                alt="..."
              />
            ) : (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
          <div className="col-12 col-md-7 text-center ps-5">
            {data ? (
              <>
                <h3 className="card-title my-5">{data?.name}</h3>
                <p className="card-text">id: {data?.id}</p>
                <p className="card-text">Species: {data?.species}</p>
                <p className="card-text">Gender: {data?.gender}</p>
                <p className="card-text">Status: {data?.status}</p>
                <p className="card-text">Origin: {data?.origin.name}</p>
                <p className="card-text">Location: {data?.location.name}</p>
                <Link to={`/list`} className="btn my-5 btn-success">
                  Volver
                </Link>
              </>
            ) : (
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
