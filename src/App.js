import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sponsor from "./pages/Sponsor";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/sponsor",
    element: <Sponsor />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
