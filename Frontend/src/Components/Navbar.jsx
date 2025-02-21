import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import img from '../assets/img2.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const active = "text-white bg-green-700 md:bg-transparent md:text-green-500";
  const inactive = "text-green-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 rounded-md  top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-md">
        {/* Logo */}
        <AnchorLink 
          href="#hero"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <img src={img} alt="Logo" className="w-auto h-10 rounded-xl" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-900 hidden md:block">
            Kali Herbals
          </span>
        </AnchorLink>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <AnchorLink
                href="#hero"
                className={`block py-2 px-3 rounded md:p-0 ${inactive} hover:bg-green-500 hover:text-white`}
                onClick={closeMenu}
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#products"
                className={`block py-2 px-3 rounded md:p-0 ${inactive}`}
                onClick={closeMenu}
              >
                Products
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#more"
                className={`block py-2 px-3 rounded md:p-0 ${inactive}`}
                onClick={closeMenu}
              >
               More Info
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className={`block py-2 px-3 rounded md:p-0 ${inactive}`}
                onClick={closeMenu}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;