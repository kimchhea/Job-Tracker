import { Link } from "react-router-dom";
import { useState } from "react";
const links = [
  { label: "Home", path: "/" },
  { label: "Find Job", path: "find" },
  { label: "Messages", path: "message" },
  { label: "Community", path: "community" },
  { label: "About us", path: "about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Job Tracker</h1>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul
          className={`flex-col md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
