import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Up from "./Up";
import Welcome from "./Welcome";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl shadow-xl shadow-white">
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Up />
    </>
  );
};

export default Layout;
