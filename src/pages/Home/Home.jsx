import React from 'react';
import Footer from '../../components/Shared/Footer';
import Banner from './Banner';
import Branding from './Branding';
import Features from './Features';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

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