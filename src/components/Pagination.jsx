import { PropTypes } from "prop-types";

export const Pagination = ({ page, increasePage, decreasePage, setpage }) => {
  return (
    <div className="flex justify-center my-3">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li
            onClick={() => {
              if (page > 1) {
                decreasePage();
              }
            }}
            className="user-select-none"
          >
            <a
              className={`py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer ${
                page <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </a>
          </li>
          <li className="py-2 px-3 leading-tight text-white bg-blue-600 border border-gray-300 cursor-pointer">
            <a>{page}</a>
          </li>
          <li
            onClick={() => {
              if (page <= 41) {
                setpage(page + 1);
              }
            }}
            className="cursor-pointer"
          >
            <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300">
              {` ${page >= 42 ? "..." : page + 1}`}
            </a>
          </li>
          <li
            onClick={() => {
              if (page <= 40) {
                setpage(page + 2);
              }
            }}
            className="cursor-pointer"
          >
            <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300">
              {` ${page >= 41 ? "..." : page + 2}`}
            </a>
          </li>
          <li
            onClick={increasePage}
            className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer user-select-none ${
              page >= 42 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <a>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
  setpage: PropTypes.func.isRequired,
};
