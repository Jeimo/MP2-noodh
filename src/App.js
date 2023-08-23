import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moviepage from "./pages/Moviepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TVPage from "./pages/TVPage";
// import SearchResult from "./pages/SearchResult"
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <div className="page-container flex flex-col min-h-full">
      <div className="content-wrap flex-1">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Moviepage />} />
          <Route path='/tv' element={<TVPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

