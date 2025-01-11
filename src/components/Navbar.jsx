import ".././index.css";
import { Link } from "react-router-dom";
import { Aperture } from "lucide-react";
import { useState } from "react";
const links = [
  { label: "Home", path: "/" },
  { label: "Find Job", path: "/find" },
  { label: "Messages", path: "message" },
  { label: "Community", path: "community" },
  { label: "About us", path: "about" },
];

const Navbar = () => {
  const [isOpen, IssetOpen] = useState(false);
  return (
    <nav className="navbar bg-primary position-sticky top-0 z-3 ">
      <div className="container-fluid">
        <div className="col-12 d-flex justify-content-around align-item-center ">
          <div className="logo-img text-light pt-2">
            <h2>
              <Aperture></Aperture> Job-Tracker
            </h2>
          </div>
          <ul className="d-flex gap-3 fs-3 px-3 list-unstyled pt-2">
            {links.map((link, index) => (
              <li key={index} className="nav-item  text-light">
                <Link className="nav-link" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
