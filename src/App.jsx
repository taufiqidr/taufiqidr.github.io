import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomeLayout from "./Home/HomeLayout";
import ProjectsLayout from "./Projects/ProjectsLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeLayout />} />
        <Route path="projects" element={<ProjectsLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
