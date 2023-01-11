import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Root from "./feature/Root";
import SearchResult from "./pages/SearchResult";
import Watch from "./pages/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/search",
        element: <SearchResult />,
        errorElement: <NotFound />,
      },
      {
        path: "/watch",
        element: <Watch />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
