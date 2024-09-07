import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
      <div className="fixed top-0 left-0 right-0 z-30 bg-gray-200">
        {/* Mobile Header */}
        <div className="flex container items-center justify-between py-2.5 px-4 lg:hidden">
          <img onClick={() => navigate("/")} src="logoMobile.svg" alt="logo" />
          <button type="button" onClick={showDrawer}>
            <img src="hamburger.svg" alt="menu" />
          </button>
        </div>

        {/* Drawer for Mobile */}
        {open && (
          <div className="fixed inset-0 bg-gray-200 text-center p-4 z-40">
            <button className="absolute top-4 right-4" onClick={onClose}>
              X {/* Replace 'X' with a close icon if needed */}
            </button>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/"
              onClick={onClose}
            >
              Bosh sahifa
            </NavLink>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/blog"
              onClick={onClose}
            >
              Blog
            </NavLink>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/about"
              onClick={onClose}
            >
              Haqida
            </NavLink>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/courses"
              onClick={onClose}
            >
              Kurslar
            </NavLink>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/books"
              onClick={onClose}
            >
              Kitoblar
            </NavLink>
            <NavLink
              className="block my-2 text-lg font-semibold border-b-4 border-transparent hover:border-blue-800"
              to="/shop"
              onClick={onClose}
            >
              Do'kon
            </NavLink>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button className="px-4 py-2 font-medium text-white bg-blue-800">
                Tizimga kirish
              </button>
              <button className="px-4 py-2 font-medium text-blue-800">
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden container lg:flex items-center justify-between py-2.5 px-4">
          <img onClick={() => navigate("/")} src="logoDesctop.svg" alt="logo" />
          <div className="flex items-center gap-10">
            <NavLink
              className="text-xl text-blue-900  transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/"
            >
              Bosh sahifa
            </NavLink>
            <NavLink
              className="text-xl text-blue-900 transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="text-xl text-blue-900 transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/about"
            >
              Haqida
            </NavLink>
            <NavLink
              className="text-xl text-blue-900 transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/courses"
            >
              Kurslar
            </NavLink>
            <NavLink
              className="text-xl text-blue-900 transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/books"
            >
              Kitoblar
            </NavLink>
            <NavLink
              className="text-xl text-blue-900 transition-all duration-300 font-bold rounded-12 px-2 pb-1 border-b-4 border-transparent hover:border-blue-800"
              to="/shop"
            >
              Do'kon
            </NavLink>
            <button className="px-6 py-3 font-medium text-lg text-white bg-red-600 rounded-full">
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
