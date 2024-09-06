import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-10 text-white bg-blue-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <img src="logoFooter.svg" alt="logo" className="w-40" />

          <div className="flex flex-wrap items-center gap-10 mt-10">
            <Link className="text-lg font-medium hover:text-blue-300" to={"/"}>
              Asosiy sahifa
            </Link>
            <Link className="text-lg font-medium hover:text-blue-300" to={"/blog"}>
              Blog
            </Link>
            <Link className="text-lg font-medium hover:text-blue-300" to={"/about"}>
              Haqida
            </Link>
            <Link className="text-lg font-medium hover:text-blue-300" to={"/courses"}>
              Kurslar
            </Link>
            <Link className="text-lg font-medium hover:text-blue-300" to={"/books"}>
              Kitoblar
            </Link>
            <Link className="text-lg font-medium hover:text-blue-300" to={"/shop"}>
              Do'kon
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-bold">Bizni kuzating</h3>
            <div className="flex items-center gap-6">
              <a href="https://t.me/themuallimah" target="_blank">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="tg.svg"
                  alt="Telegram"
                />
              </a>
              <a href="https://www.instagram.com/themuallimahalumni/" target="_blank">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="insta.svg"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.facebook.com/themuallimah/" target="_blank">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="faceBook.svg"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.tiktok.com/@themuallimah" target="_blank">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="tiktok.svg"
                  alt="TikTok"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mt-16">
          <div className="text-sm text-gray-400">
            <p className="mb-2">Copyright © 2021 - 2024 The Muallimah. Barcha huquqlar himoyalangan.</p>
            <p className="mb-2">Maxfiylik Siyosati</p>
            <p className="mb-2">Kirish imkoniyati</p>
          </div>
          <a href="https://t.me/Muxsinjon_Maxsudovich" className="text-gray-400 hover:text-blue-300">
            Dasturchilar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
