import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="d-flex justify-content-center align-items-center p-3"
    >
      <div className="card" style={{ width: "18rem" }}>
        <img src={item?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item?.name}</h5>
          <p className="card-text">{item?.type}</p>
          <Link to={`${item?.id}`} className="btn btn-success">
            Go {item?.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
