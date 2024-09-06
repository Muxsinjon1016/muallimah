import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      {/* Header */}
      <header className="mb-[80px] lg:mb-[110px]">
        <Header />
      </header>

      {/* Main Content */}
      <main className="container min-h-screen px-4 py-8 mx-auto lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-4 text-white bg-blue-900">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
