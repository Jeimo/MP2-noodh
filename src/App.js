import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moviepage from "./pages/Moviepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TVPage from "./pages/TVPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthContextProvider } from "./context/AuthContext";
import WatchlistPage from "./pages/WatchlistPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={
              <Home />} 
            />

            <Route path='/movies' element={
              <Moviepage />
            }/>

            <Route path='/tv' element={
              <TVPage />
            }/>

            <Route path='/search' element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }/>

            <Route path='/login' element={
              <LoginPage />}
            />
            <Route path='/signup' element={
              <SignupPage />}
            />
            <Route path='/watchlist' element={
              <ProtectedRoute>
                <WatchlistPage />
              </ProtectedRoute>}
            />
        </Routes>
      </AuthContextProvider>
        <Footer />
    </>
  );
}

