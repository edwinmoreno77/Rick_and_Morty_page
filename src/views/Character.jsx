import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import blackHeart from "../assets/blackHeart.ico";
import redHeart from "../assets/redHeart.ico";

export const Character = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [isRed, setisRed] = useState(false);

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
      <div className="container-fluid min_vh ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-4/12 p-2 flex justify-center">
            {data ? (
              <div className="w-full shadow-lg rounded-lg ">
                <img
                  src={data?.image}
                  className="rounded w-full shadow-2xl"
                  alt="..."
                />
              </div>
            ) : (
              <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-500 h-96 w-96"></div>
              </div>
            )}
          </div>
          <div className="w-full md:w-8/12 text-center md:pl-5">
            {data ? (
              <>
                <h3 className="text-3xl font-bold my-5">{data?.name}</h3>
                <p className="text-lg">id: {data?.id}</p>
                <p className="text-lg">Species: {data?.species}</p>
                <p className="text-lg">Gender: {data?.gender}</p>
                <p className="text-lg">Status: {data?.status}</p>
                <p className="text-lg">Origin: {data?.origin.name}</p>
                <p className="text-lg">Location: {data?.location.name}</p>
                <div className="flex justify-evenly items-center mt-9">
                  <Link
                    to={`/list`}
                    className="bg-lime-500 transition ease-in-out  hover:scale-105 hover:bg-lime-700 text-white py-2 px-4 rounded my-5 inline-block"
                  >
                    Volver
                  </Link>
                  <span onClick={() => setisRed(!isRed)}>
                    <img
                      className="cursor-pointer transition ease-in-out  hover:scale-125"
                      src={isRed ? redHeart : blackHeart}
                      width={30}
                    />
                  </span>
                </div>
              </>
            ) : (
              <p className="animate-pulse">
                <span className="block bg-gray-300 h-6 w-7/12 mb-2"></span>
                <span className="block bg-gray-300 h-6 w-4/12 mb-2"></span>
                <span className="block bg-gray-300 h-6 w-4/12 mb-2"></span>
                <span className="block bg-gray-300 h-6 w-6/12 mb-2"></span>
                <span className="block bg-gray-300 h-6 w-8/12 mb-2"></span>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
