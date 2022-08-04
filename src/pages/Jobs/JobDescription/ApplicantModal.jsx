import React from 'react';
import { useForm } from 'react-hook-form';

const ApplicantModal = ({ job}) => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  // console.log(job);

  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
    <div>
      <input type="checkbox" id="applicant-modal" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="applicant-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className='text-lg md:text-2xl lg:text-4xl pt-8 pb-12'>Apply For {job?.jobTitle}</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              {/* name filed  */}
              <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                <div className='flex flex-col space-y-1 gap-y-1'>
                  <label className='text-lg pl-2'>First name <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    placeholder='First Name'
                    className='border rounded-lg py-1 text-lg pl-3 '
                    {...register('firstName', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.firstName?.message}</p>
                </div>
                <div className='flex flex-col space-y-1 gap-y-1'>
                  <label className='text-lg pl-2'>Last name <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    placeholder='Last Name '
                    className='border rounded-lg py-1 text-lg pl-3 '
                    {...register('lastName', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.lastName?.message}</p>
                </div>
              </div>
              {/* name filed end */}

              <div className='flex flex-col space-y-1 gap-y-1 py-2'>
                <label className='text-lg pl-2'>Your email <span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='border rounded-lg py-2 text-lg pl-3 '
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.email?.message}</p>
              </div>

              <div className='flex flex-col space-y-1 gap-y-1 '>
                <label className='text-lg pl-2'>Contact number <span className='text-red-500'>*</span></label>
                <input
                  type="number"
                  placeholder='Phone number'
                  className='border rounded-lg  py-1 text-lg pl-3 '
                  {...register('phoneNumber', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.phoneNumber?.message}</p>
              </div>

              <div className='flex flex-col space-y-1 gap-y-1 py-2'>
                <label className='md:text-lg pl-2'>Your Resume/CV (provide google drive link) <span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  placeholder='Hyperlink'
                  className='border rounded-lg py-1 text-lg pl-3 '
                  {...register('resume', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.resume?.message}</p>
              </div>

              {/* social link  */}

              <h3 className='text-lg md:text-xl lg:text-2xl pl-2'>Social Links</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col space-y-1 gap-y-1'>
                  <input
                    type="text"
                    placeholder='Portfolio'
                    className='border rounded-lg py-1 text-lg pl-3 '
                    {...register('portfolio', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.portfolio?.message}</p>
                </div>

                <div className='flex flex-col space-y-1 gap-y-1'>
                  <input
                    type="text"
                    placeholder='Linkedin'
                    className='border rounded-lg py-1 text-lg pl-3 '
                    {...register('linkedin', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.linkedin?.message}</p>
                </div>
              </div>

              {/* social link end */}

              <div className='flex flex-col space-y-1 gap-y-1 py-5'>
                <h4 className='pl-2 md:text-lg'>Why should you be hired for this role? <span className='text-red-500'>*</span></h4>
                <textarea
                  type="text"
                  rows={4}
                  placeholder='Add a cover letter'
                  className='border rounded-lg py-1 text-xl pl-3 '
                  {...register('coverLetter', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                />
                <p className='text-[13px] text-red-500 pl-3'>{errors.coverLetter?.message}</p>
              </div>

              <div className="pb-5 text-center lg:text-start">
                <button className='px-5 py-3  border bg-primary rounded-lg text-lg  text-white'>
                  Submit Application
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantModal;