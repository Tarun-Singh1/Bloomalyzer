import { Link } from 'react-scroll';
import { useRef } from "react";

const NavLink = ({ to, className, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-60}
      duration={300}
      className={className}
    >
      {children}
    </Link>
  );
};

const Nav2 = () => {
    const basicLinkStyles = "w-full cursor-pointer text-md rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors";
    const dashboardLinkStyles = "h-fit text-white text-sm p-2 grid place-items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center";
    const linkBorderStyles = "w-full text-center border-b border-gray-700 border-1 md:border-0 py-2";

    const navbarStickyRef = useRef(null);

    const toggleNavbar = () => {
        navbarStickyRef.current?.classList.toggle("hidden");
    }

    return (
        <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-50 top-0 start-0">
            <div className="max-w-[90rem] mx-auto p-4 flex flex-wrap items-center justify-between ">
                {/* <img src="" className="h-8" alt="BloomalyzerLogo" /> */}
                <span className="self-center font-semibold whitespace-nowrap">
                    <NavLink to="hero" className={`${basicLinkStyles} !text-white !font-bold !text-2xl`}> Bloomalyzer </NavLink>
                </span>

                <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
                    <NavLink to="dashboard" className={`${basicLinkStyles} ${dashboardLinkStyles}`}> Dashboard </NavLink>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleNavbar}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" ref={navbarStickyRef}>
                    <ul className="flex flex-col items-center px-4 py-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg lg:space-x-5 xl:space-x-8 md:flex-row md:mt-0 md:border-0">
                        <li className={linkBorderStyles}>
                            <NavLink to="science" className={basicLinkStyles}>Science</NavLink>
                        </li>

                        <li className={linkBorderStyles}>
                            <NavLink to="gallery" className={basicLinkStyles}>Gallery</NavLink>
                        </li>

                        <li className={linkBorderStyles}>
                            <NavLink to="timeline" className={basicLinkStyles}>Timeline</NavLink>
                        </li>

                        <li className={linkBorderStyles}>
                            <NavLink to="impact" className={basicLinkStyles}>Impact</NavLink>
                        </li>

                        <li className={linkBorderStyles}>
                            <NavLink to="vision" className={basicLinkStyles}>Vision</NavLink>
                        </li>

                        <li className="w-full text-center py-2">
                            <NavLink to="about" className={`${basicLinkStyles}`}>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav2;