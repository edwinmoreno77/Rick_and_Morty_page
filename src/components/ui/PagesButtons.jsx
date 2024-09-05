import { PropTypes } from "prop-types";

export const PagesButtons = ({ page, increasePage, decreasePage }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <div className="d-flex align-item-center">
        <button
          className={`btn btn-primary m-1 ${page == 1 ? "disabled" : ""}`}
          id="#btn_atras"
          onClick={decreasePage}
        >
          Atras
        </button>
        <span className="p-2 m-1 rounded text-white bg-success">{page}</span>
        <button
          className={`btn btn-primary m-1 ${page >= 42 ? "disabled" : ""}`}
          id="btn_siguiente"
          onClick={increasePage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

PagesButtons.propTypes = {
  page: PropTypes.number.isRequired,
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
};
