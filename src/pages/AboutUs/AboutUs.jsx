import React from 'react';
import aboutImg from '../Assets/images/about-img.jpg'
import { PhoneIcon, ArrowSmRightIcon, CheckIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hooks/useTitle';

const AboutUs = () => {
    useTitle('About Us')
    return (
        <>
            <div name='support' className='w-full '>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay opacity-[0.6]' src={aboutImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h3 className='text-4xl font-bold py-6 text-center'>Our vision</h3>
                        <p className='py-4 text-xl md:text-2xl lg:text-3xl text-slate-200 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <button className='flex bg-indigo-600 rounded-lg text-white text-sm p-5'>Contact <ArrowSmRightIcon className='w-5 ml-2' /></button>
                            </div>

                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <button className='flex bg-indigo-600 rounded-lg text-white text-sm p-5'>Contact <ArrowSmRightIcon className='w-5 ml-2' /></button>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <button className='flex bg-indigo-600 rounded-lg text-white text-sm p-5'>Contact <ArrowSmRightIcon className='w-5 ml-2' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div name='platforms' className='w-full mt-24 bg-base-300 pt-12 pb-12'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>All-In-One Platform</h2>
                    <p className='text-xl py-8 text-gray-500 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                        ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                        nostrum tempore.
                    </p>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 px-2'>

                        <div className='flex'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Notifications</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores maxime deserunt voluptatibus consequatur similique
                                    voluptates!
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Notifications</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores maxime deserunt voluptatibus consequatur similique
                                    voluptates!
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Notifications</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores maxime deserunt voluptatibus consequatur similique
                                    voluptates!
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Notifications</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores maxime deserunt voluptatibus consequatur similique
                                    voluptates!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div name='about' className='w-full my-32'>
                <div className='max-w-[1240px] mx-auto'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold'>Trusted by companies across the world</h2>
                        <p className='text-lg md:text-xl px-3  py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-5 px-5 lg:px-2 text-center'>
                        <div className='border py-8 rounded-xl shadow-xl' >
                            <p className='text-6xl font-bold text-indigo-600'>100%</p>
                            <p className='text-gray-400 mt-2'>Completion</p>
                        </div>
                        <div className='border py-8 rounded-xl shadow-xl' >
                            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                            <p className='text-gray-400 mt-2'>Support</p>
                        </div>
                        <div className='border py-8 rounded-xl shadow-xl' >
                            <p className='text-6xl font-bold text-indigo-600'>100K</p>
                            <p className='text-gray-400 mt-2'>Transactions</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;