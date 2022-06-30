import React from "react";

// Components (Footer not rendered in home page)
import HeroSection from "./HeroSection/HeroSection";

import { LoadingAnimation } from "./Routing/LoadingAnimation";


const Home = () => {
  return (
    <>
      <LoadingAnimation/>
      <HeroSection/>
    </>
  )
};

export default Home;
