import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Up from "./Up";
const Layout = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="sm:mx-14 mx-2 shadow-xl shadow-white">
        <Outlet />
      </main>
      <Footer />
      <Up />
    </div>
  );
};

export default Layout;
