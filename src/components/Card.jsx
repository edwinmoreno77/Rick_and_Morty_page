import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(!isLoading);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      key={item?.id}
      className="d-flex justify-content-center align-items-center p-3"
    >
      {isLoading ? (
        <div className="card card_custom" style={{ width: "18rem" }}>
          <Link to={`${item?.id}`}>
            <img src={item?.image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
            <Link to={`${item?.id}`} className="btn btn-primary">
              {item?.name}
            </Link>
          </div>
        </div>
      ) : (
        <div className="card" aria-hidden="true">
          <img src={item?.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
            </p>
            <a
              className="btn btn-primary disabled placeholder col-6"
              aria-disabled="true"
            ></a>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
