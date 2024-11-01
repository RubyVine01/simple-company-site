import React from "react";
import { Box } from "@mui/material";
import MainBanner from "./MainContent/MainBanner";
import FeaturesGrid from "./MainContent/FeaturesGrid";
import CallToActionSection from "./MainContent/CallToActionSection";

const MainContent: React.FC = () => {
  return (
    <>
      <MainBanner />
      <FeaturesGrid />
      <CallToActionSection />
    </>
  );
};

export default MainContent;
