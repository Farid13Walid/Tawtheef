import React from "react";
import style from "./Home.module.css";
import Header from "../header/Header";
import HeaderText from "../ui/HeaderText";
import HeaderSearch from "../ui/HeaderSearch";
import StatsSection from "../ui/StatsSection";
import JobListings from "../ui/JobListings";
import StateSectionContainer from "../ui/StateSectionContainer";
import JobCallToAction from "../ui/JobCallToAction";
import CompanyLogos from "../ui/CompanyLogos";
import TestimonialSlider from "../ui/TestimonialSlider";
import MobileAppsSection from "../ui/MobileAppsSection";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderText />
        {/* <HeaderSearch /> */}
      </Header>
      <StatsSection />
      <JobListings />
      <StateSectionContainer>
        <JobCallToAction />
      </StateSectionContainer>
      <CompanyLogos />
      <TestimonialSlider />
      <StateSectionContainer className="pb-0">
        <MobileAppsSection />
      </StateSectionContainer>
    </>
  );
}
