import { Navbar } from "../ui/Navbar";
import { Pagination } from "../ui/Pagination";
import { Card } from "../ui/Card";
import { useFetch } from "../../hook/useFetch";
import { Footer } from "../ui/Footer";

export const PageList = () => {
  const { increasePage, decreasePage, page, data, setpage } = useFetch();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="text-center pt-2">Character list</h1>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {data?.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
      <Pagination
        increasePage={increasePage}
        decreasePage={decreasePage}
        page={page}
        setpage={setpage}
      />
      <Footer />
    </>
  );
};
