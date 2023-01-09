import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Home from "./pages/Home";
import SearchProfile from "./pages/SearchProfile";
import ProfileLoader from "./pages/SearchProfile/ProfileLoader";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchprofile" element={<SearchProfile />} />
          <Route path="/profileloader" element={<ProfileLoader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
