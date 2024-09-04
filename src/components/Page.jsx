import { Navbar } from "./Navbar";
import { PagesButtons } from "./PagesButtons";
import { Card } from "./Card";
import { useFetch } from "../hook/useFetch";

export const Page = () => {
  const { increasePage, decreasePage, page, data } = useFetch();

  return (
    <>
      <Navbar />
      <div className="container-fluid text-center">
        <PagesButtons
          increasePage={increasePage}
          decreasePage={decreasePage}
          page={page}
        />
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {data?.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
