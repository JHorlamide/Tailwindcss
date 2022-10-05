import React, { useState } from "react";

import Logo from "../../../assets/img/logo.svg";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="manage" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/product" className="hover:text-darkGrayisBlue">
            Products
          </a>
          <a href="/feature" className="hover:text-darkGrayisBlue">
            Features
          </a>
          <a href="/about" className="hover:text-darkGrayisBlue">
            About
          </a>
          <a href="/partner" className="hover:text-darkGrayisBlue">
            Partners
          </a>
        </div>

        <a
          href="/get-started"
          className="hidden md:block p-3 px-6 pt-2 bg-brightRed text-white rounded-full baseline hover:bg-darkGrayisBlue"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={handleToggle}
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex flex-col items-center self-end ${
            isToggle ? "hidden" : ""
          } py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="/pricing" className="hover:text-darkGrayisBlue">
            Pricing
          </a>
          <a href="/product" className="hover:text-darkGrayisBlue">
            Product
          </a>
          <a href="/about" className="hover:text-darkGrayisBlue">
            About Us
          </a>
          <a href="/careers" className="hover:text-darkGrayisBlue">
            Careers
          </a>
          <a href="/community" className="hover:text-darkGrayisBlue">
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
