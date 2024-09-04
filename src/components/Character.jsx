import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

  return (
    <div>
      <div
        key={data?.id}
        className="d-flex justify-content-center align-datas-center p-3"
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src={data?.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="card-text">id: {data?.id}</span>
            <h5 className="card-title mt-4">{data?.name}</h5>
            <p className="card-text">{data?.species}</p>
            <Link to={`/lista`} className="btn btn-success">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
