// import { Link } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";
// import { Carousels } from "../components/Carousels";

// export const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Carousels />
//       <div className="text-center mt-5 min_vh">
//         <h1 className="text-center">Welcome</h1>
//         <h3>Rick and Morty Page</h3>
//         <Link className="btn btn-success mt-3" to={"/list"}>
//           List
//         </Link>
//       </div>
//       <Footer />
//     </>
//   );
// };

import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousels } from "../components/Carousels";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <div className="text-center mt-5 min-h-screen">
        <h1 className="text-center text-4xl font-bold">Welcome</h1>
        <h3 className="text-2xl my-5">Rick and Morty Page</h3>
        <Link
          className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-5"
          to={"/list"}
        >
          List
        </Link>
      </div>
      <Footer />
    </>
  );
};
