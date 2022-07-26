import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className='contact_us'>
      <div className="contact_content">
        <div className="contact_title h-96 relative">
          <div className="absolute text-white title_heading text-center">
            <h2 className='text-3xl'>GET IN TOUCH</h2>
            <p className='mt-2'>Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
          </div>
        </div>
        <div className="contact_form grid grid-cols-1 md:grid-cols-2 justify-center">
          <div className="call p-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum?</p>
          </div>
          <div className="connect p-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vitae.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;