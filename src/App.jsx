import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageList } from "./views/PageList";
import { Character } from "./views/Character";
import { Home } from "./views/Home";
import { Search } from "./views/Search";
import { NotFound } from "./views/NotFound";
import injectContext from "./store/appContext";
import "./App.css";
import { Favorites } from "./views/Favorites";

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
