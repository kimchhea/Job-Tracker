import ".././index.css";
import { Link } from "react-router-dom";
import { Aperture } from "lucide-react";
import { useState } from "react";
const links = [
  { label: "Home", path: "/" },
  { label: "Find Job", path: "find" },
  { label: "Advice", path: "Advice" },
  // { label: "Community", path: "community" },
  { label: "About us", path: "about" },
  { label: "Login", path: "login" },
];

const Navbar = () => {
  const [isOpen, IssetOpen] = useState(false);
  return (
    <nav className="navbar position-sticky top-0 z-3 ">
      <div className="container-fluid">
        <div className="col-12 d-flex justify-content-between px-5 align-item-center ">
          <div className="logo-img text-light pt-2 ps-4">
            <h2 >
               Job-Tracker
            </h2>
          </div>
          <ul className="left-nav d-flex gap-3  px-3 list-unstyled pt-2  ">
            {links.map((link, index) => ( 
              <li key={index} className="nav-item  text-light">
                <Link className="nav-link" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="  text-light button-navbar">
              <a href="" className=""> ☰</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
