import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='my-20  container mx-auto text-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
                <div>
                    <h2 className='text-2xl font-bold'>Job OnBoard</h2>
                    <h4 className='pt-5 pb-2'>Contact with us </h4>
                    <div className='flex justify-center items-center pt-5 gap-5'>
                        <a href="/" target="_blank" rel="noopener noreferrer" className='flex gap-4  hover:text-primary'>
                            <span className='text-2xl text-[#2479ce] hover:text-[#023b74]'><BsLinkedin /></span>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className='flex gap-4   hover:text-primary'>
                            <span className='text-2xl text-red-500 hover:text-red-700'><BsInstagram /></span>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className='flex gap-4  text-green-800 '>
                            <span className='text-2xl text-[#2479ce] hover:text-[#023b74]'><BsFacebook /></span>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className='flex gap-4  text-green-800 '>
                            <span className='text-2xl text-[#2479ce] hover:text-[#023b74]'><BsTwitter /></span>
                        </a>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p><Link to='/carrer' className="link link-hover hover:text-primary text-lg">Carrer </Link></p>
                    <p><Link to='/team' className="link link-hover hover:text-primary text-lg">Our Team</Link></p>
                    <p><Link to='/hr-resources' className="link link-hover hover:text-primary text-lg">HR Resources</Link></p>
                    <p><Link to='/developer' className="link link-hover hover:text-primary text-lg">Developer</Link></p>
                </div>
                <div className='space-y-2'>
                    <p><Link to='/pricing' className="link link-hover hover:text-primary text-lg">Our Pricing </Link></p>
                    <p><Link to='/partner' className="link link-hover hover:text-primary text-lg"> Partner Us</Link></p>
                    <p><Link to='/contact' className="link link-hover hover:text-primary text-lg">Contact Us</Link></p>
                    <p><Link to='/sitemap' className="link link-hover hover:text-primary text-lg">Site Map</Link></p>
                </div>
                <div className='space-y-2'>
                    <p><Link to='/terms' className="link link-hover hover:text-primary text-lg">Terms of use</Link></p>
                    <p><Link to='/policy' className="link link-hover hover:text-primary text-lg">Privacy policy</Link></p>
                    <p><Link to='/cookie' className="link link-hover hover:text-primary text-lg">Cookie policy</Link></p>
                    <p><Link to='/trust-safety' className="link link-hover hover:text-primary text-lg">Trust and Safety </Link></p>
                </div>
                <div className="flex justify-center items-center text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque.
                </div>
            </div>
            <p className='text-center py-5 mt-10'>Copyright © {currentYear} - All Right Reserved </p>
        </footer>
    );
};

export default Footer;