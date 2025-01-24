import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./page/Home.jsx";
import Find from "./page/Find.jsx";
import Advice from "./page/Advice.jsx";
import Details from "./page/Details.jsx";
import About from "./page/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "find",
        element: <Find></Find>,
      },
      {
        path: "advice",
        element: <Advice></Advice>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: (
          <h2 className="text-center text-gray-600 font-bold">
            Page Not Found
          </h2>
        ),
      },
      // {
      //   path: "Details",
      //   element: <Details></Details>,
      // },
      {
        path: "details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
