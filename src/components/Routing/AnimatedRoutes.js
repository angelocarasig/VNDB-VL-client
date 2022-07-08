import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home";
import UserData from "../UserData";
import ErrorPage from "../ErrorPage"

//CSS
import "./AnimatedRoutes.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div className="Routes">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/UserData" element={<UserData />} />
          <Route path="/ErrorPage" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
