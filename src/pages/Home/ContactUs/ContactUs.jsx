import React from 'react';
import 'remixicon/fonts/remixicon.css'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className='contact_us my-24'>
      <div className="contact_content">
        <div className="contact_title h-96 relative">
          <div className="absolute text-white title_heading text-center">
            <h2 className='text-3xl'>GET IN TOUCH</h2>
            <p className='mt-2'>Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
          </div>
        </div>
        <div className="contact_form grid grid-cols-1 md:grid-cols-2 justify-center mt-[-100px] relative z-10 mx-0 md:mx-16 gap-5">
          <div className="call p-10 bg-base-100 shadow-2xl rounded text-center">
            <span><i class="ri-phone-fill text-5xl"></i> </span>
            <p className="text-sm font-bold my-3">Call To Talk Now</p>
            <p className='text-sm my-3'>Interested in Job Onboard Services? Just pick up the phone to chat with a member of our Job Onboard team.</p>
            <p className='text-blue-400'>+880 1700 000000</p>
          </div>
          <div className="connect p-10 bg-base-100 shadow-2xl rounded text-center">
          <span><i class="ri-discuss-line text-5xl"></i> </span>
            <p className="text-sm font-bold my-3">Contact Customer Support</p>
            <p className='text-sm my-3'>Sometimes you need a little help from your friends. Or a Job Onboard Support rep. Don't worry... we're here for you.</p>
            <button className='p-5 bg-orange-500 my-5 rounded-lg text-white text-sm'>Contact Support</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;