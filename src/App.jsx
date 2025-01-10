import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Contact, contactData } from "./pages/Contact";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./ui/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router} />;
};

export default App;
