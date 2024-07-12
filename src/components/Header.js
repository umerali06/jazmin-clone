import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"; // Ensure this path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("PKR");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={toggleMenu} className="text-gray-600">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className="flex-grow text-center">
          <img src={logo} alt="Jazmin" className="h-8 inline" />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="hidden md:block bg-transparent text-gray-600 border-none focus:outline-none"
          >
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
          <FontAwesomeIcon
            icon={faUser}
            className="hidden md:block text-gray-600 hover:text-gray-900 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto py-4 px-6">
          <button onClick={toggleMenu} className="text-gray-600">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li className="border-b">
                <a href="#sale" className="text-gray-800 block py-2">
                  Sale
                </a>
              </li>
              <li className="border-b">
                <a
                  href="#unsticthed-summer"
                  className="text-gray-800 block py-2"
                >
                  Unstitched Summer
                </a>
              </li>
              <li className="border-b">
                <a href="#ready-to-wear" className="text-gray-800 block py-2">
                  Ready to Wear
                </a>
              </li>
              <li className="border-b">
                <a href="#formals" className="text-gray-800 block py-2">
                  Formals
                </a>
              </li>
              <li className="border-b">
                <a href="#iris-eid-lawns" className="text-gray-800 block py-2">
                  Iris Eid Lawns
                </a>
              </li>
              <li className="border-b">
                <a
                  href="#shahkaar-luxury-lawns"
                  className="text-gray-800 block py-2"
                >
                  Shahkaar Luxury Lawns
                </a>
              </li>
              <li className="mt-8">
                <div className="flex space-x-4">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
