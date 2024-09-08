import { getPagesRickAndMorty } from "../api/getData";

// eslint-disable-next-line no-unused-vars
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      page: 1,
      pageData: null,
      favorites: [],
    },

    actions: {
      getPages: async () => {
        const { page } = getStore();
        const pageData = await getPagesRickAndMorty(page);
        setStore({ pageData });
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
      addFavorites: (favorite) => {
        const { favorites } = getStore();
        setStore({ favorites: [...favorites, favorite] });
      },
      removeFavorites: (favorite) => {
        const { favorites } = getStore();
        const newFavorites = favorites.filter((item) => item.id != favorite.id);
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
