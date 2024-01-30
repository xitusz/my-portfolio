import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Router = () => (
  <Routes>
    <Route exact path="/my-portfolio/" element={<Home />} />
    <Route exact path="/my-portfolio/about" element={<About />} />
    <Route exact path="/my-portfolio/projects" element={<Projects />} />
  </Routes>
);

export default Router;
