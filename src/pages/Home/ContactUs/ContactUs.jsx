import React from 'react';
import 'remixicon/fonts/remixicon.css'
import mail from '../../Assets/images/contact/mail.png'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className='contact_us my-24 container mx-auto'>
      <div className="contact_content">
        <div className="contact_title h-96 relative">
          <div className="absolute text-white title_heading text-center">
            <h2 className='text-3xl'>GET IN TOUCH</h2>
            <p className='mt-2 text-white'>Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
          </div>
        </div>
        <div className="contact_form grid grid-cols-1 md:grid-cols-2 justify-center md:mt-[-100px] relative z-0 mx-0 md:mx-16 gap-5 px-5 md:px-0">
          <div className="call p-10 bg-base-100 shadow-2xl rounded text-center">
            <span><i class="ri-phone-fill text-5xl text-blue-300"></i> </span>
            <p className="text-sm font-bold my-3">Call To Talk Now</p>
            <p className='text-sm my-3'>Interested in Job Onboard Services? Just pick up the phone to chat with a member of our Job Onboard team.</p>
            <p className='text-blue-400'>+880 1700 000000</p>
          </div>
          <div className="connect p-10 bg-base-100 shadow-2xl rounded text-center">
          <div className='flex justify-center'> <img className='w-12 h-12' src={mail} alt="" /> </div>
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