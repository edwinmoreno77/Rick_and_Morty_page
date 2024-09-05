import { PropTypes } from "prop-types";

export const PagesButtons = ({ page, increasePage, decreasePage, setpage }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            onClick={() => {
              if (page > 1) {
                decreasePage();
              }
            }}
            className="page-item user-select-none"
          >
            <a
              className={`page-link cursor_pointer ${
                page <= 1 ? "disabled" : ""
              }`}
            >
              Previous
            </a>
          </li>
          <li className="page-item active cursor_pointer">
            <a className="page-link">{page}</a>
          </li>
          <li
            onClick={() => {
              if (page <= 41) {
                setpage(page + 1);
              }
            }}
            className="page-item cursor_pointer"
          >
            <a className="page-link">{` ${page >= 42 ? "..." : page + 1}`}</a>
          </li>
          <li
            onClick={() => {
              if (page <= 40) {
                setpage(page + 2);
              }
            }}
            className="page-item cursor_pointer"
          >
            <a className="page-link">{` ${page >= 41 ? "..." : page + 2}`}</a>
          </li>
          <li
            onClick={increasePage}
            className={`page-item cursor_pointer user-select-none ${
              page >= 42 ? "disabled " : ""
            }`}
          >
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

PagesButtons.propTypes = {
  page: PropTypes.number.isRequired,
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
  setpage: PropTypes.func.isRequired,
};
