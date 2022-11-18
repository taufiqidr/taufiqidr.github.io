import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Layout from "./Components/Layout";
import Welcome from "./Home/Welcome";
import Projects from "./Projects/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
