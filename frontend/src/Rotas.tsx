import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SearchProfile from "./pages/SearchProfile";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchprofile" element={<SearchProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
