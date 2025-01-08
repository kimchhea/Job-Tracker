import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
const router = createBrowserRouter([
  {
    apth: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <h2>HOME</h2>,
      },
      {
        path: "find",
        element: <h2>find job</h2>,
      },
      {
        path: "message",
        element: <h2>message</h2>,
      },
      {
        path: "community",
        element: <h2>Community</h2>,
      },
      {
        path: "about",
        element: <h2>About Page</h2>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
