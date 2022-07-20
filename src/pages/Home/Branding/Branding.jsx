import React from 'react';
import bImgOne from "../../../assets/images/branding-company-img/1.jpg";
import bImgTwo from "../../../assets/images/branding-company-img/2.jpg";
import bImgThree from "../../../assets/images/branding-company-img/3.png";
import bImgfour from "../../../assets/images/branding-company-img/4.png";
import bImgfive from "../../../assets/images/branding-company-img/5.png";
import bImgsix from "../../../assets/images/branding-company-img/7.png";
import './Branding.css';
const Branding = () => {
  return (
    <>
      <h1 className='bSectionTitle'>Out Trusted Clints</h1>
    <section className='branding-section'>
      <div className="branding-container">
        <div className="brandingImg">
          <img src={bImgOne} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgTwo} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgThree} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgfour} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgfive} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgsix} alt="" />
        </div>
       
      </div>
    </section>
    </>
  );
};

export default Branding;