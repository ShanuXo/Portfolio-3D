import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { styles } from "../styles";
import {
  logowhite,
  menu,
  close,
  githubIcon,
  linkedinIcon,
  leetcodeIcon,
  downloadIcon,
} from "../assets"; // Import your icons here
import { navLinks } from "../constants";
import ShanuPDF from "../Pdf/Shanu.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-6 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logowhite} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Shanu &nbsp;
            <span className="sm:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              
            </li>
          ))}
        </ul>

        <div className="flex gap-8">
          <a
            style={{
              color: hoveredIcon === 'linkedin' ? 'var(--text-white)' : 'var(--text-secondary)',
              cursor: "pointer",
              fontSize: '18px',
            }}
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
            href="https://www.linkedin.com/in/shanu-kumar-95b644214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            style={{
              color:  hoveredIcon === 'github' ? 'var(--text-white)' : 'var(--text-secondary)',
              cursor: "pointer",
              fontSize: '18px',
            }}
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
            href="https://github.com/ShanuXo/FitnessApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            style={{
              color: hoveredIcon === 'leetcode' ? 'var(--text-white)' : 'var(--text-secondary)',
              cursor: "pointer",
              fontSize: '18px',
            }}
            onMouseEnter={() => setHoveredIcon('leetcode')}
            onMouseLeave={() => setHoveredIcon(null)}
            href="https://leetcode.com/shanusah8001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
          <a
            style={{
              color: hoveredIcon === 'twitter' ? 'var(--text-white)' : 'var(--text-secondary)',
              cursor: "pointer",
              fontSize: '18px',
            }}
            onMouseEnter={() => setHoveredIcon('twitter')}
            onMouseLeave={() => setHoveredIcon(null)}
            href="https://twitter.com/ShanuXo_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter/X
          </a>
          <a
            style={{
              color: hoveredIcon === 'downloadCV' ? 'var(--text-white)' : 'var(--text-secondary)',
              cursor: "pointer",
              fontSize: '18px',
            }}
            onMouseEnter={() => setHoveredIcon('downloadCV')}
            onMouseLeave={() => setHoveredIcon(null)}
            href={ShanuPDF}
            download
            className="btn btn2 flex items-center gap-2"
          >
            {/* <img src={downloadIcon} alt="Download CV" className="w-6 h-6" /> */}
            Download CV
          </a>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//Working
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logowhite, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (

//     <nav
//       className={`${styles.paddingX
//         } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
//         }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logowhite} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Shanu &nbsp;
//             <span className='sm:block hidden'> | Software Engineer</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${active === nav.title ? "text-white" : "text-secondary"
//                 } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>
//         {/* for small devices */}
//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${!toggle ? "hidden" : "flex"
//               } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
//                     }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
