import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./page/Home.jsx";
import Details from "./page/Details.jsx";
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
        element: (
          <h2 className="text-center text-green-600 font-bold">Find Job</h2>
        ),
      },
      {
        path: "message",
        element: (
          <h2 className="text-center text-red-600 font-bold">Message</h2>
        ),
      },
      {
        path: "community",
        element: (
          <h2 className="text-center text-purple-600 font-bold">Community</h2>
        ),
      },
      {
        path: "about",
        element: (
          <h2 className="text-center text-orange-600 font-bold">About Page</h2>
        ),
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
        path:"details/:id",
        element:<Details></Details>,
      }
    
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
