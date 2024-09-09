import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "./views/Favorites";
import { Character } from "./views/Character";
import { PageList } from "./views/PageList";
import { NotFound } from "./views/NotFound";
import { Search } from "./views/Search";
import { Home } from "./views/Home";
import injectContext from "./store/appContext";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Character />} />
          <Route path="/favorites/:id" element={<Character />} />
          <Route path="/list/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
