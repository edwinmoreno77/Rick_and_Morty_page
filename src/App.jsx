import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/Page";
import { Character } from "./components/Character";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Page />} />
          <Route path="/lista/:id" element={<Character />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
