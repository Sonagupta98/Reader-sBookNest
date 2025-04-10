import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import RedirectAuthenticatedUser from "./providers/RedirectAuthenticatedUsers";
import AddBook from "./pages/AddBook";
import RedirectUnauthenticatedUser from "./providers/RedirectUnAuthenticatedUsers";
import Bookpage from "./pages/Bookpage";
import Searchpage from "./pages/Searchpage";
import UpdateBook from "./pages/UpdateBook";

function App() {
  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LogIn />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/add-book"
          element={
            <RedirectUnauthenticatedUser>
              <AddBook />
            </RedirectUnauthenticatedUser>
          }
        />

        <Route path="/book/:id" element={<Bookpage />} />
        <Route
          path="/book/:id/update"
          element={
            <RedirectUnauthenticatedUser>
              <UpdateBook />
            </RedirectUnauthenticatedUser>
          }
        />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
