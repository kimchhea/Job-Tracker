import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
