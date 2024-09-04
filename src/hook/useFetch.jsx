import { useCallback, useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setdata] = useState(null);
  const [page, setpage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setdata(data.results);
    } catch (error) {
      console.log("Error capturado en el fetch", error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const increasePage = () => {
    if (page === 42) return;
    setpage(page + 1);
  };

  const decreasePage = () => {
    if (page === 0) return;
    setpage(page - 1);
  };

  return {
    data,
    page,
    decreasePage,
    increasePage,
  };
};
