import React, { useState, useEffect, useRef } from "react";
import "../scss/styles.scss";
import navlogo from "../assets/Link  logo-dark.png.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar
} from "reactstrap";

const Navbarsandbox = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("EN");

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "EN" },
    { code: "ES" },
    { code: "FR" },
    { code: "DE" },
  ];

  const handleLanguageSelect = (code) => {
    setSelected(code);
  };

  return (
    <Navbar className="navwraper">
      <div className="container navmain">
        <div className="navlogoholder">
          <img src={navlogo} alt="Logo" />
        </div>

        <button
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div
          ref={menuRef}
          className={`navlinkwrap ${isMenuOpen ? "active" : ""}`}
        >
          {/* Navigation Links */}
          <div className="navlinkhold">
            <a href="#demos" className="navlinkholdatag">
              Demos
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#pages" className="navlinkholdatag">
              Pages
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#projects" className="navlinkholdatag">
              Projects
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#blog" className="navlinkholdatag">
              Blog
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#blocks" className="navlinkholdatag">
              Blocks
            </a>
          </div>
          <div className="navlinkhold">
            <a href="#documentation" className="navlinkholdatag">
              Documentation
            </a>
          </div>

          {/* First Dropdown in Hamburger Menu */}
          <Dropdown
            isOpen={isMobileDropdownOpen}
            toggle={toggleMobileDropdown}
            className="mobile-navdrophold"
          >
            <DropdownToggle
              tag="div"
              className="d-flex align-items-center gap-1 cursor-pointer"
            >
              <span className="droptext">{selected}</span>
            </DropdownToggle>
            <DropdownMenu className="min-w-[120px] py-1">
              {languages.map((lang) => (
                <DropdownItem
                  key={lang.code}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLanguageSelect(lang.code);
                  }}
                  className={`px-4 py-2 text-sm ${
                    selected === lang.code ? "bg-gray-50" : ""
                  }`}
                >
                  <span className="font-medium">{lang.code}</span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
          className=" navdrophold"
        >
          <DropdownToggle
            tag="div"
            className="d-flex align-items-center gap-1 cursor-pointer"
          >
            <span className="font-semibold text-lg">{selected}</span>
          </DropdownToggle>
          <DropdownMenu className="min-w-[120px] py-1">
            {languages.map((lang) => (
              <DropdownItem
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`px-4 py-2 text-sm ${
                  selected === lang.code ? "bg-gray-50" : ""
                }`}
              >
                <span className="font-medium">{lang.code}</span>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Navbarsandbox;











// import React, { useState } from "react";
// import "../scss/navbar.scss";
// import navlogo from "../assets/Link → logo-dark.png.png";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleMobileDropdown = () => {
//     setIsMobileDropdownOpen(!isMobileDropdownOpen);
//   };

//   const languages = [
//     { code: "EN", name: "English" },
//     { code: "ES", name: "Español" },
//     { code: "FR", name: "Français" },
//     { code: "DE", name: "Deutsch" },
//   ];
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selected, setSelected] = useState("EN");

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <div className="navwraper">
//       <div className="container navmain">
//         <div className="navlogoholder">
//           <img src={navlogo} alt="" />
//         </div>
//         <button
//           className={`hamburger ${isMenuOpen ? "active" : ""}`}
//           onClick={toggleMenu}
//         >
//           <span className="hamburger-line"></span>
//           <span className="hamburger-line"></span>
//           <span className="hamburger-line"></span>
//         </button>
//         <div className={`navlinkwrap ${isMenuOpen ? "active" : ""}`}>
//           <div className="navlinkhold">
//             <a href="#demos" className="navlinkholdatag">
//               Demos
//             </a>
//           </div>
//           <div className="navlinkhold">
//             <a href="#pages" className="navlinkholdatag">
//               Pages
//             </a>
//           </div>
//           <div className="navlinkhold">
//             <a href="#projects" className="navlinkholdatag">
//               Projects
//             </a>
//           </div>
//           <div className="navlinkhold">
//             <a href="#blog" className="navlinkholdatag">
//               Blog
//             </a>
//           </div>
//           <div className="navlinkhold">
//             <a href="#blocks" className="navlinkholdatag">
//               Blocks
//             </a>
//           </div>
//           <div className="navlinkhold">
//             <a href="#documentation" className="navlinkholdatag">
//               Documentation
//             </a>
//           </div>
//           <Dropdown
//             isOpen={dropdownOpen}
//             toggle={toggle}
//             className={`mobile-navdrophold ${
//               isMobileDropdownOpen ? "active" : ""
//             }`}
//             onClick={toggleMobileDropdown}
//           >
//             <DropdownToggle
//               tag="div"
//               className="d-flex align-items-center gap-1 cursor-pointer"
//               style={{ cursor: "pointer" }}
//             >
//               <span className='droptext'>{selected}</span>
//               __
//             </DropdownToggle>

//             <DropdownMenu className="min-w-[120px] py-1">
//               {languages.map((lang) => (
//                 <DropdownItem
//                   key={lang.code}
//                   onClick={() => setSelected(lang.code)}
//                   className={`px-4 py-2 text-sm hover:bg-gray-100 ${
//                     selected === lang.code ? "bg-gray-50" : ""
//                   }`}
//                 >
//                   <span className="font-medium">{lang.code}</span>
//                   <span className="ml-2 text-gray-500">{lang.name}</span>
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </div>
//         <Dropdown
//           isOpen={dropdownOpen}
//           toggle={toggle}
//           className="d-flex navdrophold"
//         >
//           <DropdownToggle
//             tag="div"
//             className="d-flex align-items-center gap-1 cursor-pointer"
//             style={{ cursor: "pointer" }}
//           >
//             <span className="font-semibold text-lg">{selected}</span>
//             __
//           </DropdownToggle>

//           <DropdownMenu className="min-w-[120px] py-1">
//             {languages.map((lang) => (
//               <DropdownItem
//                 key={lang.code}
//                 onClick={() => setSelected(lang.code)}
//                 className={`px-4 py-2 text-sm hover:bg-gray-100 ${
//                   selected === lang.code ? "bg-gray-50" : ""
//                 }`}
//               >
//                 <span className="font-medium">{lang.code}</span>
//                 <span className="ml-2 text-gray-500">{lang.name}</span>
//               </DropdownItem>
//             ))}
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



