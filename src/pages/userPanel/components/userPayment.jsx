import { IoNotificationsOutline } from "react-icons/io5";
import React from "react";

export const UserPayment = () => {
  return (
    <div>
      <div className="bg-gray-200 rounded-b-24 py-8">
        <div className="container flex items-center justify-between">
          <p className="text-2xl font-semibold">My payments </p>
          <div className="flex items-center gap-4">
            <div className="rounded-full w-14 h-14 bg-white text-center text-base font-semibold">
              user img
            </div>
            <div className="bg-4 rounded-full flex items-center justify-center bg-[#00235A] w-14 h-14">
              <IoNotificationsOutline className="w-7 h-auto text-white" />
            </div>
          </div>
        </div>
      </div>
      <div>user payment</div>
    </div>
  );
};

export default UserPayment;
