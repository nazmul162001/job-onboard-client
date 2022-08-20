import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import './Contact.css'
import { contactData, teamMemberData } from '../../data';
import { BASE_API } from '../../config';
import Swal from 'sweetalert2';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { TbWorldDownload } from 'react-icons/tb';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const guestData = { ...data }
    // console.log(guestData);
    await fetch(`${BASE_API}/guestEmail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(guestData),
    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            text: `Thank you. We will contact you very soon `,
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          reset()
        }
        else {
          Swal.fire({
            text: `Something is wrong`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }
      })
  }


  return (
    <div>
      <div className="contact-container">
        <div className="bg-img-overlay pb-12">
          <div className="text-center text-white py-8 space-y-2">
            <h2 className='text-3xl lg:text-4xl font-bold font-mono'>Contact Our Team</h2>
            <h3 className='text-lg'>Have any questions ? We'd love to hear from you .</h3>
          </div>
          <div className="flex flex-col justify-between lg:flex-row container mx-auto px-8 gap-6">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 space-y-2 p-5 bg-base-100 rounded-lg">
              <div className='flex flex-col space-y-1 '>
                <input
                  type="text"
                  placeholder='Enter your name'
                  className='border border-primary rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'
                  {...register('guestName', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.guestName?.message}</p>
              </div>
              <div className='flex flex-col space-y-1 '>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.email?.message}</p>
              </div>

              <div className='flex flex-col space-y-1 '>
                <input
                  type="text"
                  placeholder='Enter your Subject'
                  className='border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'
                  {...register('subject', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.subject?.message}</p>
              </div>

              <div className='flex flex-col space-y-1 pb-3'>
                <textarea
                  type="text"
                  rows={4}
                  placeholder='Write your message'
                  className='text-black border rounded-lg py-1 text-xl pl-3 hover:border-primary duration-300'
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.message?.message}</p>
              </div>

              <div className="pb-5 lg:pb-0 text-center lg:text-start">
                <button className='px-5 py-3  border bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-lg w-full text-white'>
                  Submit Now
                </button>
              </div>
            </form>

            <div className='lg:w-1/2 text-white space-y-3 text-center'>
              <div className="text-center space-y-2 py-4">
                <h2 className='text-3xl md:text-4xl font-bold'>For Enquiries</h2>
                <p className='text-lg'>Interested  our service? Talk to our experts today .</p>
                <p className='text-lg'>Get in touch with our support</p>
              </div>
              <div className='space-y-2  md:text-xl'>
                <p>Nazmul : +8801778992817 </p>
                <p>Arefin : +88011537249869 </p>
                <p>Shawon : +8801957543699 </p>
                <p>Kiron : +8801855535091  </p>
                <p>Sajal : +8801571117363 </p>
                <p>Emtiaz : +8801568194230 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Location  */}
      <div className='container mx-auto px-5 lg:px-8 py-8'>
        <h2 className='text-2xl lg:text-4xl font-bold pt-8 text-center font-mono'>Office locations</h2>
        <div className="line w-32 md:w-48 rounded-full opacity-70 h-1 mx-auto bg-primary mt-3 mb-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            contactData?.map(contactInfo => {
              return <div key={contactInfo.id} className=''>
                <div className="shadow-lg hover:shadow-xl border p-8 space-y-1 rounded-lg">
                  <h3><span className='text-[18px] font-bold'>Location :</span> {contactInfo.location}</h3>
                  <h4><span className='text-primary'>Street :</span> {contactInfo.street}</h4>
                  <p className='font-semibold'>Contact Number : <span className='text-primary'>{contactInfo.contactNum}</span></p>
                  <p><span className='text-[17px]'>Availability :</span> {contactInfo?.availability}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>

      {/* Meet Our Team  */}
      <div className="container mx-auto px-5 lg:px-8 py-8 mb-5" id='team'>
        <h2 className='text-center text-xl md:text-4xl font-mono font-bold pt-5 '>Meet Our Team </h2>
        <div className="line w-32 md:w-48 rounded-full opacity-70 h-1 mx-auto bg-primary mt-3 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {
            teamMemberData?.map((member) => {
              return <div className='shadow-lg hover:shadow-2xl p-5 text-center space-y-4 border rounded-lg'>
                <div class="avatar py-2 mx-auto">
                  <div class="w-36 ring-4  rounded-full ">
                    <img src={member?.photoUrl} alt="employees photos" />
                  </div>
                </div>
                <h2 className="text-lg font-bold">{member?.name}</h2>
                <div className='flex justify-evenly pt-5'>
                  <a className='text-2xl' href={member?.linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                  <a className='text-2xl' href={member?.githuburl} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                  <a className='text-2xl' href={member?.portfolioUrl} target="_blank" rel="noopener noreferrer"><TbWorldDownload/></a>
                </div>
              </div>
            })
          }
        </div>
      </div>


      <Footer />
    </div>

  );
};

export default Contact;