import { Navbar } from "../components/Navbar";
import { Pagination } from "../components/Pagination";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const PageList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(store.favorites);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-center pt-3 text-4xl text-lime-500 font-bold underline decoration-lime-500 tracking-tight">
          Character List
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
          {store.pageData?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Pagination />
      <Footer />
    </>
  );
};
