import React from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Branding from "../Branding/Branding";
import ContactUs from "../ContactUs/ContactUs";
<<<<<<< HEAD
import Features from "../Features/Features";
import Review from "../Review/Review";
=======
import JobHunter from "../ForJobHunter/JobHunter";
>>>>>>> 56086c78bb4cb016df8f97777d9aab2333c267b5
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WhyJobOnboard from "../WhyJobOnboard/WhyJobOnboard";

const Home = () => {
  return (
    <>
      <Banner />
      <Branding />
      <WhyJobOnboard />
      <JobHunter />
      <WhyChooseUs />
      <Review />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
