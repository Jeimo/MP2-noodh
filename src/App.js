import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moviepage from "./pages/Moviepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TVPage from "./pages/TVPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Authenticate from "./components/Authenticate";

export default function App() {
  return (
    <div className="page-container flex flex-col min-h-full">
      <div className="content-wrap flex-1">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={
              <Authenticate>
                <Moviepage />
              </Authenticate>
          }/>
          <Route path='/tv' element={
              <Authenticate>
                <TVPage />
              </Authenticate>
          }/>
          <Route path='/search' element={
              <Authenticate>
                <SearchPage />
              </Authenticate>
          }/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

