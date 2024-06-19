"use client";
import React from "react";
import { HeroParallaxhome } from "@/components/LandingNav/Home";
import { GoogleGeminiEffec } from "@/components/LandingNav/geffect";
import { InfiniteMovingCardsDemo } from "@/components/LandingNav/infinity";

import { GlareCardDemo } from "@/components/LandingNav/glare";
import { SparklesPreview } from "@/components/LandingNav/Sprak";



export default function Home() {
  return (
    
    <>
  
      <SparklesPreview/>
      
      <GoogleGeminiEffec/>
      <HeroParallaxhome/>
   
     <GlareCardDemo/>
    </>
 


  );
}
