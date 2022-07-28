import React from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Branding from "../Branding/Branding";
import ContactUs from "../ContactUs/ContactUs";
import Features from "../Features/Features";
import JobHunter from "../ForJobHunter/JobHunter";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WhyJobOnboard from "../WhyJobOnboard/WhyJobOnboard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Branding />
      <Features />
      <WhyJobOnboard />
      <WhyChooseUs />
      <JobHunter />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
