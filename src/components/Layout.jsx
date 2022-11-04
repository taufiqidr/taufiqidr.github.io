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
    <div>
      <Navbar />
      <main className="bg-dark">
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Up />
    </div>
  );
};

export default Layout;
