import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Up from "./Up";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="shadow-xl shadow-white">
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
}

export default App;
