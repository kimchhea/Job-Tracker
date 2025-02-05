import { createBrowserRouter, RouterProvider , Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./page/Home.jsx";
import Find from "./page/Find.jsx";
import Advice from "./page/Advice.jsx";
import Details from "./page/Details.jsx";
import About from "./page/About.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Errorpage from "./page/Errorpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to ="/login" replace />,
      },
      {
        path:"home",
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
        element:<Errorpage/>
        
      },
      // {
      //   path: "Details",
      //   element: <Details></Details>,
      // },
      {
        path: "details/:id",
        element: <Details></Details>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "Register",
        element:<Register/> ,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
