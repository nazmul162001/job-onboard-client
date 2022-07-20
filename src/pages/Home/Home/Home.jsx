import React from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Branding from '../Branding/Branding';
import Features from '../Features/Features';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div className='pt-20'>
      <h2>This is home page branch checking & checking</h2>
      <Banner/>
      <Features/>
      <WhyChooseUs/>
      <Branding/>
      <Footer/>
    </div>
  );
};

export default Home;