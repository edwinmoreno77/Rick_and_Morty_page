// eslint-disable-next-line no-unused-vars
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      page: 1,
      pageData: null,
      favorites: [],
    },

    actions: {
      getPages: () => {
        const { page } = getStore();

        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error: ${response.status} ${response.statusText}`
              );
            }
            return response.json();
          })
          .then((data) => {
            setStore({
              pageData: data.results,
            });
          })
          .catch((error) => console.log("error :>> ", error));
      },
      increasePage: () => {
        const { page } = getStore();
        if (page === 42) return;
        const newPage = page + 1;
        setStore({ page: newPage });
      },
      decreasePage: () => {
        const { page } = getStore();
        if (page === 0) return;
        const newPage = page - 1;
        setStore({ page: newPage });
      },
      setPage: (page) => {
        setStore({ page });
      },
      addFavorites: (id) => {
        const { favorites } = getStore();
        setStore({ favorites: [...favorites, id] });
      },
      removeFavorites: (id) => {
        const { favorites } = getStore();
        const newFavorites = favorites.filter((item) => item != id);
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
