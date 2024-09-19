import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { PiMedalFill } from "react-icons/pi";
import { BsCreditCard2Back } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

export const UserLayout = () => {
  return (
    <>
      <div className="flex items-start justify-between ">
        <div className="w-[10%] text-center rounded-r-24 min-h-screen pt-6 px-9 bg-[#00235a]">
          <Link to="/">
            <img className="mx-auto mb-14" src="/logo.svg" alt="logo" />
          </Link>
          <NavLink
            className="block hover:scale-[1.3] transition-all duration-300 mb-10 text-white"
            to={"/userLayout/"}
          >
            <GoHome className="w-8 h-auto mx-auto" />
          </NavLink>
          <NavLink
            className="block hover:scale-[1.3] transition-all duration-300 mb-10 text-white"
            to={"/userLayout/userCources"}
          >
            <CgNotes className="w-8 h-auto mx-auto" />
          </NavLink>
          <NavLink
            className="block hover:scale-[1.3] transition-all duration-300 mb-10 text-white"
            to={"/userLayout/userCertificates"}
          >
            <PiMedalFill className="w-8 h-auto mx-auto" />
          </NavLink>
          <NavLink
            className="block hover:scale-[1.3] transition-all duration-300 mb-10 text-white"
            to={"/userLayout/userPayment"}
          >
            <BsCreditCard2Back className="w-8 h-auto mx-auto" />
          </NavLink>
          <NavLink
            className="block hover:scale-[1.3] transition-all duration-300 text-white"
            to={"/userLayout/userSettings"}
          >
            <IoMdSettings className="w-8 h-auto mx-auto" />
          </NavLink>
        </div>
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
