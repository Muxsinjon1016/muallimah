import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 bg-white">
        {/* Mobile Header */}
        <div className="flex container items-center justify-between py-2.5 px-4 lg:hidden">
          <Link to={"/"}>
            <img
              onClick={() => navigate("/")}
              src="logoMobile.svg"
              alt="logo"
            />
          </Link>
          <button type="button" onClick={showDrawer}>
            <img src="hamburger.svg" alt="menu" />
          </button>
        </div>

        {/* Drawer for Mobile */}
        {open && (
          <div className="fixed inset-0 z-40 p-4 text-center bg-gray-200">
            <button className="absolute top-4 right-4" onClick={onClose}>
              X {/* Replace 'X' with a close icon if needed */}
            </button>
            <NavLink
              to={"/"}
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              onClick={onClose}
            >
              Home
            </NavLink>
            <a
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              href="#blog"
              onClick={onClose}
            >
              Blog
            </a>
            <a
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              href="#about"
              onClick={onClose}
            >
              About
            </a>
            <a
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              href="#cources"
              onClick={onClose}
            >
              Courses
            </a>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/video"
              onClick={onClose}
            >
              Video
            </NavLink>
            <a
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              href="#shop"
              onClick={onClose}
            >
              Shop
            </a>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button className="px-4 py-2 font-medium text-white bg-blue-800">
                LogIn
              </button>
              <button className="px-4 py-2 font-medium text-blue-800">
                Sign up
              </button>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden container lg:flex items-center justify-between py-2.5 px-4">
          <Link to="/">
            <img
              onClick={() => navigate("/")}
              src="logoDesctop.svg"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-10">
            <NavLink
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              to="/"
            >
              Home
            </NavLink>
            <a
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              href="#blog"
            >
              Blog
            </a>
            <a
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              href="#about"
            >
              About
            </a>
            <a
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              href="#cources"
            >
              Courses
            </a>
            <NavLink
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              to="/video"
            >
              Video
            </NavLink>
            <a
              className="px-2 pb-1 text-xl font-bold text-blue-900 transition-all duration-300 border-b-4 border-transparent rounded-12 hover:border-blue-800"
              href="#shop"
            >
              Shop
            </a>
            <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
