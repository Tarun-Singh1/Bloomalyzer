import { Link } from 'react-scroll';
import { useRef } from "react";
import appLogo from '../assets/app_logo.png'; // 1. Import your logo

const NavLink = ({ to, isSidebarOpen, toogleSidebar, className, children, ...props }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={0} // Restored smooth scroll as it's generally better UX
      offset={-65}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
    const mobileMenuRef = useRef(null);

    const toggleNavbar = () => {
        mobileMenuRef.current?.classList.toggle("hidden");
    }

    const handleLinkClick = () => {
        if (!mobileMenuRef.current?.classList.contains("hidden")) {
            mobileMenuRef.current?.classList.add("hidden");
        }
    }

    return (
        <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-50 top-0 start-0 border-b border-gray-700/50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                {/* 2. Replace the old span with the image and a new span */}
                <NavLink to="hero" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={handleLinkClick}>
                    <img src={appLogo} className="h-8 rounded-full" alt="Bloomalyzer Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Bloomalyzer</span>
                </NavLink>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <NavLink to="dashboard" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors" onClick={handleLinkClick}>
                        Dashboard
                    </NavLink>
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div className="hidden w-full md:block md:w-auto md:order-1" ref={mobileMenuRef}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800/95 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <NavLink to="science" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">Science</NavLink>
                        </li>
                        <li>
                            <NavLink to="gallery" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="timeline" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">Timeline</NavLink>
                        </li>
                        <li>
                            <NavLink to="impact" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">Impact</NavLink>
                        </li>
                         <li>
                            <NavLink to="vision" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">Vision</NavLink>
                        </li>
                        <li>
                            <NavLink to="about" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 cursor-pointer transition-colors">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;