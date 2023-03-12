import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./feature/Home/Home";
import NotFound from "./feature/Fallback/NotFound";
import Root from "./feature/Root";
import SearchResult from "./feature/SearchResult/SearchResult";
import Watch from "./feature/Watch/Watch";
import { useEffect } from "react";

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
                path: "/search/:query",
                element: <SearchResult />,
                errorElement: <NotFound />,
            },
            {
                path: "/watch/:videoId",
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
