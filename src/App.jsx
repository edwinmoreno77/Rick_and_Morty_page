import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageList } from "./components/views/PageList";
import { Character } from "./components/views/Character";
import { Home } from "./components/views/Home";
import { Search } from "./components/views/Search";
import { NotFound } from "./components/views/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/favorites" element={<NotFound />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Character />} />
          <Route path="/list/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
