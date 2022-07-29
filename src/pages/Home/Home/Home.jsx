import React from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Branding from "../Branding/Branding";
import ContactUs from "../ContactUs/ContactUs";
import ForEmployers from "../ForEmployers/ForEmployers";
import JobHunter from "../ForJobHunter/JobHunter";
import Review from "../Review/Review";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WhyJobOnboard from "../WhyJobOnboard/WhyJobOnboard";

const Home = () => {
  return (
    <>
      <Banner />
      <Branding />
      <WhyJobOnboard />
      <WhyChooseUs />
      <JobHunter />
      <ForEmployers />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
