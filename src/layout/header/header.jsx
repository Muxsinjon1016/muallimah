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
      <div className="fixed top-0 left-0 right-0 z-30 transition-transform duration-500 bg-white shadow-md">
        <div className="container flex items-center justify-between px-10 lg:hidden">
          <img
            onClick={() => navigate("/")}
            src="logoMobile.svg"
            alt="logo"
            className="transition-transform duration-500 transform cursor-pointer hover:scale-110"
          />
          <button type="button" onClick={showDrawer}>
            <img src="hamburger.svg" alt="menu" />
          </button>

          {open && (
            <div className="fixed inset-0 z-40 flex justify-end bg-black bg-opacity-50">
              <div className="fixed top-0 right-0 h-full p-5 transition-transform duration-500 transform translate-x-0 bg-gray-100 shadow-lg w-80">
                <button
                  className="mb-5 text-2xl font-bold"
                  onClick={onClose}
                >
                  &times;
                </button>
                <nav className="space-y-5">
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/"
                    onClick={onClose}
                  >
                    Bosh sahifa
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/blog"
                    onClick={onClose}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/about"
                    onClick={onClose}
                  >
                    Haqida
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/courses"
                    onClick={onClose}
                  >
                    Kurslar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/books"
                    onClick={onClose}
                  >
                    Kitoblar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `block text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-blue-800"
                      }`
                    }
                    to="/shop"
                    onClick={onClose}
                  >
                    Do'kon
                  </NavLink>
                </nav>
                <div className="flex justify-center mt-10 space-x-3">
                  <button className="py-2 text-white transition-colors duration-300 bg-blue-900 rounded-lg px-7 hover:bg-blue-800">
                    Tizimga kirish
                  </button>
                  <button className="py-2 text-blue-900 transition-colors duration-300 border border-blue-900 rounded-lg px-7 hover:bg-blue-800 hover:text-white">
                    Ro'yxatdan o'tish
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="container flex items-center justify-between py-5">
            <img
              onClick={() => navigate("/")}
              src="logoDesctop.svg"
              alt="logo"
              className="transition-transform duration-500 transform cursor-pointer hover:scale-110"
            />
            <div className="flex items-center space-x-7">
              {["/", "/blog", "/about", "/courses", "/books", "/shop"].map(
                (path, index) => (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      `xl:text-2xl font-semibold transition-all duration-500 ${
                        isActive
                          ? "text-red-500 border-b-4 border-red-500"
                          : "text-blue-800 border-b-4 border-transparent hover:border-blue-800"
                      }`
                    }
                    to={path}
                  >
                    {path === "/"
                      ? "Bosh sahifa"
                      : path.charAt(1).toUpperCase() + path.slice(2)}
                  </NavLink>
                )
              )}
              <button className="py-2 text-lg font-medium text-white transition-colors duration-300 bg-red-500 rounded-full px-7 hover:bg-red-600">
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
