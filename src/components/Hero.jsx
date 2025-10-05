import React from 'react';
import { Link } from 'react-scroll';
import HeroImage from '../assets/hero_image.jpg';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full flex flex-col justify-center items-center relative text-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-white" style={{ textShadow: '0 0 20px rgba(0,0,0,0.7)' }}>
          Bloomalyzer
        </h1>
        <p className="text-xl md:text-2xl text-gray-200" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
          Making Earth's Vital Signs Visible to All.
        </p>
      </div>
      <Link to="science" smooth={true} duration={500} className="cursor-pointer absolute bottom-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </Link>
    </section>
  );
};

export default Hero;