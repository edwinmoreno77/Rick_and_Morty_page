import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import blackHeart from "../assets/blackHeart.ico";
import redHeart from "../assets/redHeart.ico";

export const Card = ({ item }) => {
  const { actions, store } = useContext(Context);
  const { addFavorites, removeFavorites } = actions;
  const { favorites } = store;

  const isFavorite = favorites.some((id) => id == item.id);

  const [like, setlike] = useState(isFavorite);

  useEffect(() => {
    if (like) {
      if (!favorites.some((id) => id == item.id)) {
        addFavorites(item.id);
      }
    } else {
      removeFavorites(item.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  return (
    <>
      <div key={item?.id} className="flex justify-center items-center p-2">
        <div className="max-w-sm transition ease-in-out duration-300 bg-slate-50 hover:bg-white scale-95 hover:scale-105 rounded-lg shadow-md hover:shadow-2xl brightness-95 hover:brightness-105 hover:skew-y-1">
          <Link to={`${item?.id}`}>
            <img
              src={item?.image}
              className="w-full h-48 md:h-56 lg:h-72 object-cover rounded-t-lg"
              alt={item.name}
            />
          </Link>
          <div className="p-4">
            <h5 className="text-lg font-semibold">{item?.name}</h5>
            <div className="flex justify-between">
              <span>{item.id}</span>
              <p>{item.species}</p>
            </div>
            <div className="flex justify-between items-center">
              <Link
                to={`${item?.id}`}
                className="mt-2 inline-block transition ease-in-out  hover:scale-105 bg-lime-400 text-white py-1 px-2 rounded hover:bg-lime-600"
              >
                Learn more
              </Link>
              <span onClick={() => setlike(!like)}>
                <img
                  className="cursor-pointer transition ease-in-out  hover:scale-125"
                  src={like ? redHeart : blackHeart}
                  width={22}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
