import React from "react";
import logo from "../logo.png";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center gap-14 mb-4 mt-[-50px] ">
        <nav className="flex items-center ml-28 gap-20 p-5 md:p-6 lg:p-8 ">
          <div className="flex items-center">
            <img
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
              src={logo}
              alt="Company Logo"
            />
          </div>
          <div className="flex-grow mt-16 flex text-lg items-center gap-10 md:gap-8 lg:gap-10">
            <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
              Home
            </span>
            <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
              Blogs
            </span>
            <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
              Contact
            </span>
          </div>
        </nav>
        <div className="">
          <GoogleTranslate />
        </div>
      </div>
    </>
  );
};

export default Navbar;
