import React from 'react';
import bImgOne from "../../../assets/images/branding-company-img/1.jpg";
import bImgten from "../../../assets/images/branding-company-img/10.png";
import bImgeleven from "../../../assets/images/branding-company-img/11.png";
import bImgetweleve from "../../../assets/images/branding-company-img/12.png";
import bImgTwo from "../../../assets/images/branding-company-img/2.jpg";
import bImgThree from "../../../assets/images/branding-company-img/3.png";
import bImgfour from "../../../assets/images/branding-company-img/4.png";
import bImgfive from "../../../assets/images/branding-company-img/5.png";
import bImgsix from "../../../assets/images/branding-company-img/6.png";
import bImgseven from "../../../assets/images/branding-company-img/7.png";
import bImgeight from "../../../assets/images/branding-company-img/8.jpg";
import bImgnine from "../../../assets/images/branding-company-img/9.jpg";
import './Branding.css';
const Branding = () => {
  return (
    <>
     <div className="titleContainer">
     <h1 className='bSectionTitle'>Out Trusted Clints</h1>
     <span></span>
     </div>
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
        <div className="brandingImg">
          <img src={bImgseven} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgeight} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgnine} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgten} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgeleven} alt="" />
        </div>
        <div className="brandingImg">
          <img src={bImgetweleve} alt="" />
        </div>
       
      </div>
    </section>
    </>
  );
};

export default Branding;