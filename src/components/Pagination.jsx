import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Pagination = () => {
  const { store, actions } = useContext(Context);
  const { increasePage, decreasePage, setPage } = actions;
  const { page } = store;

  useEffect(() => {
    actions.getPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="flex justify-center my-3">
      <nav>
        <ul className="inline-flex items-center user-select-none">
          <li
            onClick={() => {
              if (page > 1) {
                decreasePage();
              }
            }}
            className="user-select-none bg-lime-500"
          >
            <a
              className={`py-2 px-3 ml-0 shadow-lg leading-tight text-white bg-lime-500 border border-gray-300 rounded-l-lg cursor-pointer user-select-none ${
                page <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </a>
          </li>
          <li className="py-2 px-3 leading-tight text-white bg-lime-700 border border-gray-300 cursor-pointer shadow-lg user-select-none">
            <a>{page}</a>
          </li>
          <li
            onClick={() => {
              if (page <= 41) {
                setPage(page + 1);
              }
            }}
            className="cursor-pointer user-select-none"
          >
            <a className="py-2 px-3 shadow-lg user-select-none leading-tight text-white bg-lime-500 border border-gray-300 ">
              {` ${page >= 42 ? "..." : page + 1}`}
            </a>
          </li>
          <li
            onClick={() => {
              if (page <= 40) {
                setPage(page + 2);
              }
            }}
            className="cursor-pointer user-select-none"
          >
            <a className="user-select-none py-2 px-3 shadow-lg leading-tight text-white bg-lime-500 border border-gray-300">
              {` ${page >= 41 ? "..." : page + 2}`}
            </a>
          </li>
          <li
            onClick={increasePage}
            className={`py-2 px-3 shadow-lg user-select-none leading-tight text-white bg-lime-500 border border-gray-300 rounded-r-lg cursor-pointer user-select-none ${
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
