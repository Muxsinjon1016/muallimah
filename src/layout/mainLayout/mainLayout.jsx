import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header className="mb-[70px] lg:mb-[100px]">
        <Header />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer className="py-4 text-white bg-blue-900">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
