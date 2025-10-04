import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ to, children }) => {
  const baseClasses = "cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors";
  const heroClasses = "text-white font-bold text-xl";

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-60}
      duration={300}
      className={`${baseClasses} ${to === "hero" ? heroClasses : ""}`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className='grid place-items-center'> 
              <NavLink to="hero"> 🌸 Bloomalyzer </NavLink>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="science">The Science</NavLink>
              <NavLink to="dashboard">Dashboard</NavLink>
              <NavLink to="gallery">Gallery</NavLink>
              <NavLink to="timeline">Timeline</NavLink>
              <NavLink to="impact">Impact</NavLink>
              <NavLink to="vision">Vision</NavLink>
              <NavLink to="about">About</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;