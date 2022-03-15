import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

function home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default home;
