// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoCloseSharp } from "react-icons/io5";
// import { HiMiniPause } from "react-icons/hi2";
// import { useNavbar } from "@/Context/NavbarContext";
// import { usePathname, useRouter } from "next/navigation";

// const page = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [isNavOpen, setIsnavopen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMobileNavVisibel, setIsMobilenav] = useState(true);

//   const { isNavbarEnabled, setIsNavbarEnabled, footerRef } = useNavbar();
//   const pathname = usePathname();
//   const router = useRouter();

//   let lastScrollY = 0;

//   const navLink = [
//     { title: "Home", path: "/", id: "home" },
//     { title: "About", path: "/about", id: "about" },
//     { title: "Services", path: "/services", id: "services" },
//     { title: "Gallery", path: "/gallery", id: "gallery" },
//     { title: "Blogs", path: "/blogs", id: "blogs" },
//     { title: "Contact", path: "/contact", id: "contact" },
//   ];

//   const navLinkMobile = [
//     { title: "About", path: "/about", id: "about" },
//     { title: "Services", path: "/services", id: "services" },
//     { title: "Gallery", path: "/gallery", id: "gallery" },
//     { title: "Blogs", path: "/blogs", id: "blogs" },
//     { title: "Contact", path: "/contact", id: "contact" },
//   ];

//   const handleNavigation = (section) => {
//     setIsnavopen(false);
//     if (pathname === "/") {
//       setTimeout(() => {
//         const element = document.getElementById(section.id);
//         if (element) {
//           const yOffset = -100;
//           const y =
//             element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }
//       }, 100);
//     } else {
//       router.push(section.path);
//     }
//   };

//   const handleHomeNavigation = () => {
//     setIsnavopen(false);
//     if (pathname === "/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       router.push("/");
//     }
//   };

//   const handleScroll = () => {
//     if (typeof window !== "undefined") {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//       lastScrollY = currentScrollY;
//     }
//   };

//   // FOR NAVBAR IN LARGE DEVICES
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // FOR NAVBAR IN MOBILE DEVICES
//   useEffect(() => {
//     const handleScroll = () => {
//       if (footerRef.current) {
//         const footerTop = footerRef.current.getBoundingClientRect().top;
//         const viewportHeight = window.innerHeight;
//         if (footerTop <= viewportHeight) {
//           setIsMobilenav(false);
//         } else {
//           setIsMobilenav(true);
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

//         /* ══════════════════════════════
//            MENU PILL BUTTON
//         ══════════════════════════════ */
//         .menu-btn {
//           position: fixed !important;
//           bottom: 20px !important;
//           left: 50% !important;
//           transform: translateX(-50%) !important;
//           z-index: 999 !important;
//           width: 170px !important;
//           height: 56px !important;
//           border-radius: 100px !important;
//           padding: 0 !important;
//           overflow: hidden !important;

//           /* deep dark glass */
//           background: rgba(8, 8, 8, 0.78) !important;
//           backdrop-filter: blur(20px) saturate(180%) !important;
//           -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
//           border: 1px solid rgba(255,255,255,0.11) !important;
//           box-shadow:
//             0 8px 36px rgba(0,0,0,0.55),
//             0 2px 8px rgba(0,0,0,0.35),
//             inset 0 1px 0 rgba(255,255,255,0.07) !important;
//           transition: border-color 0.3s, box-shadow 0.35s !important;
//           cursor: pointer !important;
//         }

//         .menu-btn:hover {
//           border-color: rgba(255,255,255,0.2) !important;
//           box-shadow:
//             0 14px 48px rgba(0,0,0,0.65),
//             0 2px 8px rgba(0,0,0,0.4),
//             inset 0 1px 0 rgba(255,255,255,0.1) !important;
//         }

//         /* acid-green hair-line glow at top of pill */
//         .menu-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 18%;
//           right: 18%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(200,241,53,0.75), transparent);
//           border-radius: 1px;
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* inner flex row */
//         .menu-btn-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           padding: 0 20px;
//           position: relative;
//           z-index: 2;
//         }

//         /* pause icon badge */
//         .icon-span {
//           width: 30px;
//           height: 30px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           transition: background 0.3s, border-color 0.3s;
//         }
//         .menu-btn:hover .icon-span {
//           background: rgba(200,241,53,0.1);
//           border-color: rgba(200,241,53,0.35);
//         }

//         /* "Menu" / "Home" text */
//         .menu-text {
//           color: #ffffff;
//           font-size: 1.55rem;
//           line-height: 1;
//           margin: 0;
//         }

//         /* ══════════════════════════════
//            SUBMENU PANEL
//         ══════════════════════════════ */
//         .subMenu {
//           position: fixed !important;
//           bottom: 88px !important;
//           left: 50% !important;
//           transform: translateX(-50%) !important;
//           z-index: 998 !important;
//           width: 230px !important;
//           height: auto !important;
//           border-radius: 26px !important;
//           padding: 18px 14px 16px !important;

//           /* match pill glass */
//           background: rgba(8, 8, 8, 0.85) !important;
//           backdrop-filter: blur(28px) saturate(200%) !important;
//           -webkit-backdrop-filter: blur(28px) saturate(200%) !important;
//           border: 1px solid rgba(255,255,255,0.11) !important;
//           box-shadow:
//             0 28px 72px rgba(0,0,0,0.7),
//             0 6px 20px rgba(0,0,0,0.45),
//             inset 0 1px 0 rgba(255,255,255,0.07) !important;
//           overflow: hidden !important;
//         }

//         /* matching green glow top strip on panel */
//         .subMenu::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 14%;
//           right: 14%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(200,241,53,0.55), transparent);
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* panel inner layout */
//         .subMenu-inner {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 2px;
//           position: relative;
//           z-index: 2;
//         }

//         /* each nav link row */
//         .subNav-row {
//           width: 100%;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 14px;
//           cursor: pointer;
//           overflow: hidden;
//           transition: background 0.25s;
//         }
//         .subNav-row:hover { background: rgba(255,255,255,0.05); }

//         /* slide-in fill on hover */
//         .subNav-row::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 14px;
//           background: rgba(255,255,255,0.04);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.32s cubic-bezier(0.77,0,0.18,1);
//           pointer-events: none;
//         }
//         .subNav-row:hover::after { transform: scaleX(1); }

//         /* left indicator dot */
//         .subNav-dot {
//           position: absolute;
//           left: 10px;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           background: transparent;
//           transition: background 0.25s, transform 0.25s;
//         }
//         .subNav-row:hover .subNav-dot {
//           background: rgba(200,241,53,0.85);
//           transform: scale(1.3);
//         }

//         /* right index number */
//         .subNav-idx {
//           position: absolute;
//           right: 12px;
//           font-family: 'DM Mono', monospace;
//           font-size: 0.5rem;
//           letter-spacing: 0.15em;
//           color: rgba(255,255,255,0.15);
//           transition: color 0.25s;
//           pointer-events: none;
//         }
//         .subNav-row:hover .subNav-idx { color: rgba(200,241,53,0.55); }

//         /* nav link text — font-renoric + size preserved from original */
//         .subNav-h1 {
//           font-size: 1.5rem !important;
//           padding-top: 6px !important;
//           margin-bottom: 0 !important;
//           cursor: pointer !important;
//           color: #ffffff !important;
//           border-radius: 9999px !important;
//           padding-left: 12px !important;
//           padding-right: 12px !important;
//           transition: color 0.25s !important;
//           position: relative;
//           z-index: 1;
//         }
//         .subNav-row:hover .subNav-h1 { color: #ffffff !important; }

//         /* thin divider between links */
//         .subNav-divider {
//           width: 75%;
//           height: 1px;
//           background: rgba(255,255,255,0.05);
//           margin: 1px 0;
//           flex-shrink: 0;
//         }

//         /* close button */
//         .subNav-close {
//           width: 34px;
//           height: 34px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.07);
//           border: 1px solid rgba(255,255,255,0.12);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           margin-top: 10px;
//           color: white;
//           flex-shrink: 0;
//           transition: background 0.25s, border-color 0.25s, transform 0.3s;
//         }
//         .subNav-close:hover {
//           background: rgba(255,255,255,0.13);
//           border-color: rgba(255,255,255,0.25);
//           transform: rotate(90deg);
//         }
//       `}</style>

//       <main>
//         {/* ── FLOATING MENU PILL ── */}
//         <AnimatePresence>
//           {isMobileNavVisibel && (
//             <motion.div
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 20, scale: 0.95 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="p-3 menu-btn w-50 h-16 bg-gray-800/30 backdrop-blur-lg rounded-[30px] fixed bottom-5 left-1/2 transform -translate-x-1/2 text-white overflow-hidden"
//               onClick={() => setIsnavopen(!isNavOpen)}
//             >
//               {isNavOpen ? (
//                 /* HOME — when menu is open */
//                 <div
//                   className="no-underline w-full text-center cursor-pointer menu-btn-inner"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleHomeNavigation();
//                   }}
//                 >
//                   <motion.h1
//                     className="mb-0 lg:text-4xl cursor-pointer text-white font-Renoric px-3 rounded-full text-center w-full menu-text"
//                     style={{ fontFamily: "renoric" }}
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     Home
//                   </motion.h1>
//                 </div>
//               ) : (
//                 /* MENU — resting */
//                 <div className="menu-btn-inner ">
//                   <span className="icon-span">
//                     <HiMiniPause fontSize={16} color="#c8f135" />
//                   </span>
//                   <h1
//                     className="mb-0 menu-text !mr-1.5"
//                     style={{ fontFamily: "renoric" }}
//                   >
//                     Menu
//                   </h1>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* ── SUBMENU PANEL ── */}
//         <AnimatePresence>
//           {isNavOpen && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.88, y: 16 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 12 }}
//               transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               className="subMenu transform -translate-x-1/2 bg-gray-800/30 backdrop-blur-lg w-max h-[400px] bottom-[6rem] rounded-[30px]"
//               onMouseLeave={() => setIsnavopen(false)}
//             >
//               <div className="subMenu-inner">
//                 {navLinkMobile.map((links, i) => (
//                   <React.Fragment key={i}>
//                     <motion.div
//                       className="subNav-row no-underline cursor-pointer"
//                       initial={{ opacity: 0, x: -12 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 0.26,
//                         ease: [0.22, 1, 0.36, 1],
//                         delay: i * 0.048,
//                       }}
//                       onClick={() => handleNavigation(links)}
//                     >
//                       <span className="subNav-dot" />
//                       <h1
//                         className="subNav-h1 lg:text-4xl pt-2 mb-0 cursor-pointer text-white font-Renoric px-3 rounded-full  transition-colors duration-300"
//                         style={{ fontFamily: "renoric" }}
//                       >
//                         {links.title}
//                       </h1>
//                       <span className="subNav-idx">
//                         {String(i + 1).padStart(2, "0")}
//                       </span>
//                     </motion.div>
//                     {i < navLinkMobile.length - 1 && (
//                       <div className="subNav-divider" />
//                     )}
//                   </React.Fragment>
//                 ))}

//                 {/* close button */}
//                 <motion.div
//                   className="subNav-close"
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{
//                     duration: 0.28,
//                     ease: "easeInOut",
//                     delay: navLinkMobile.length * 0.048,
//                   }}
//                   onClick={() => setIsnavopen(false)}
//                 >
//                   <IoCloseSharp fontSize={16} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   );
// };

// export default page;

// Build fix
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { HiMiniPause } from "react-icons/hi2";
import { useNavbar } from "@/Context/NavbarContext";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isNavOpen, setIsnavopen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileNavVisibel, setIsMobilenav] = useState(true);

  const { isNavbarEnabled, setIsNavbarEnabled, footerRef } = useNavbar();
  const pathname = usePathname();
  const router = useRouter();

  const navLink = [
    { title: "Home", path: "/", id: "home" },
    { title: "About", path: "/about", id: "about" },
    { title: "Services", path: "/services", id: "services" },
    { title: "Gallery", path: "/gallery", id: "gallery" },
    { title: "Blogs", path: "/blogs", id: "blogs" },
    { title: "Contact", path: "/contact", id: "contact" },
  ];

  const navLinkMobile = [
    { title: "About", path: "/about", id: "about" },
    { title: "Services", path: "/services", id: "services" },
    { title: "Gallery", path: "/gallery", id: "gallery" },
    { title: "Blogs", path: "/blogs", id: "blogs" },
    { title: "Contact", path: "/contact", id: "contact" },
  ];

  const handleNavigation = (section) => {
    setIsnavopen(false);
    if (pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(section.id);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(section.path);
    }
  };

  const handleHomeNavigation = () => {
    setIsnavopen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  // Move lastScrollY inside the component or use useRef
  const lastScrollY = useRef(0);

  // FOR NAVBAR IN LARGE DEVICES - fixed with useCallback
  useEffect(() => {
    const handleScrollWithRef = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScrollWithRef);
    return () => window.removeEventListener("scroll", handleScrollWithRef);
  }, []);

  // FOR NAVBAR IN MOBILE DEVICES - fixed dependency array
  useEffect(() => {
    const handleScrollMobile = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (footerTop <= viewportHeight) {
          setIsMobilenav(false);
        } else {
          setIsMobilenav(true);
        }
      }
    };
    window.addEventListener("scroll", handleScrollMobile);
    return () => window.removeEventListener("scroll", handleScrollMobile);
  }, [footerRef]); // Added footerRef to dependency array

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

        /* ══════════════════════════════
           MENU PILL BUTTON
        ══════════════════════════════ */
        .menu-btn {
          position: fixed !important;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          z-index: 999 !important;
          width: 170px !important;
          height: 56px !important;
          border-radius: 100px !important;
          padding: 0 !important;
          overflow: hidden !important;

          /* deep dark glass */
          background: rgba(8, 8, 8, 0.78) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
          border: 1px solid rgba(255,255,255,0.11) !important;
          box-shadow:
            0 8px 36px rgba(0,0,0,0.55),
            0 2px 8px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.07) !important;
          transition: border-color 0.3s, box-shadow 0.35s !important;
          cursor: pointer !important;
        }

        .menu-btn:hover {
          border-color: rgba(255,255,255,0.2) !important;
          box-shadow:
            0 14px 48px rgba(0,0,0,0.65),
            0 2px 8px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.1) !important;
        }

        /* acid-green hair-line glow at top of pill */
        .menu-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 18%;
          right: 18%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,241,53,0.75), transparent);
          border-radius: 1px;
          pointer-events: none;
          z-index: 1;
        }

        /* inner flex row */
        .menu-btn-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* pause icon badge */
        .icon-span {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s;
        }
        .menu-btn:hover .icon-span {
          background: rgba(200,241,53,0.1);
          border-color: rgba(200,241,53,0.35);
        }

        /* "Menu" / "Home" text */
        .menu-text {
          color: #ffffff;
          font-size: 1.55rem;
          line-height: 1;
          margin: 0;
        }

        /* ══════════════════════════════
           SUBMENU PANEL
        ══════════════════════════════ */
        .subMenu {
          position: fixed !important;
          bottom: 88px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          z-index: 998 !important;
          width: 230px !important;
          height: auto !important;
          border-radius: 26px !important;
          padding: 18px 14px 16px !important;

          /* match pill glass */
          background: rgba(8, 8, 8, 0.85) !important;
          backdrop-filter: blur(28px) saturate(200%) !important;
          -webkit-backdrop-filter: blur(28px) saturate(200%) !important;
          border: 1px solid rgba(255,255,255,0.11) !important;
          box-shadow:
            0 28px 72px rgba(0,0,0,0.7),
            0 6px 20px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.07) !important;
          overflow: hidden !important;
        }

        /* matching green glow top strip on panel */
        .subMenu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 14%;
          right: 14%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,241,53,0.55), transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* panel inner layout */
        .subMenu-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
          z-index: 2;
        }

        /* each nav link row */
        .subNav-row {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.25s;
        }
        .subNav-row:hover { background: rgba(255,255,255,0.05); }

        /* slide-in fill on hover */
        .subNav-row::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .subNav-row:hover::after { transform: scaleX(1); }

        /* left indicator dot */
        .subNav-dot {
          position: absolute;
          left: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: transparent;
          transition: background 0.25s, transform 0.25s;
        }
        .subNav-row:hover .subNav-dot {
          background: rgba(200,241,53,0.85);
          transform: scale(1.3);
        }

        /* right index number */
        .subNav-idx {
          position: absolute;
          right: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.15);
          transition: color 0.25s;
          pointer-events: none;
        }
        .subNav-row:hover .subNav-idx { color: rgba(200,241,53,0.55); }

        /* nav link text — font-renoric + size preserved from original */
        .subNav-h1 {
          font-size: 1.5rem !important;
          padding-top: 6px !important;
          margin-bottom: 0 !important;
          cursor: pointer !important;
          color: #ffffff !important;
          border-radius: 9999px !important;
          padding-left: 12px !important;
          padding-right: 12px !important;
          transition: color 0.25s !important;
          position: relative;
          z-index: 1;
        }
        .subNav-row:hover .subNav-h1 { color: #ffffff !important; }

        /* thin divider between links */
        .subNav-divider {
          width: 75%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 1px 0;
          flex-shrink: 0;
        }

        /* close button */
        .subNav-close {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: 10px;
          color: white;
          flex-shrink: 0;
          transition: background 0.25s, border-color 0.25s, transform 0.3s;
        }
        .subNav-close:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.25);
          transform: rotate(90deg);
        }
      `}</style>

      <main>
        {/* ── FLOATING MENU PILL ── */}
        <AnimatePresence>
          {isMobileNavVisibel && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-3 menu-btn w-50 h-16 bg-gray-800/30 backdrop-blur-lg rounded-[30px] fixed bottom-5 left-1/2 transform -translate-x-1/2 text-white overflow-hidden"
              onClick={() => setIsnavopen(!isNavOpen)}
            >
              {isNavOpen ? (
                /* HOME — when menu is open */
                <div
                  className="no-underline w-full text-center cursor-pointer menu-btn-inner"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHomeNavigation();
                  }}
                >
                  <motion.h1
                    className="mb-0 lg:text-4xl cursor-pointer text-white font-Renoric px-3 rounded-full text-center w-full menu-text"
                    style={{ fontFamily: "renoric" }}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Home
                  </motion.h1>
                </div>
              ) : (
                /* MENU — resting */
                <div className="menu-btn-inner ">
                  <span className="icon-span">
                    <HiMiniPause fontSize={16} color="#c8f135" />
                  </span>
                  <h1
                    className="mb-0 menu-text !mr-1.5"
                    style={{ fontFamily: "renoric" }}
                  >
                    Menu
                  </h1>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SUBMENU PANEL ── */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="subMenu transform -translate-x-1/2 bg-gray-800/30 backdrop-blur-lg w-max h-[400px] bottom-[6rem] rounded-[30px]"
              onMouseLeave={() => setIsnavopen(false)}
            >
              <div className="subMenu-inner">
                {navLinkMobile.map((links, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      className="subNav-row no-underline cursor-pointer"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.26,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.048,
                      }}
                      onClick={() => handleNavigation(links)}
                    >
                      <span className="subNav-dot" />
                      <h1
                        className="subNav-h1 lg:text-4xl pt-2 mb-0 cursor-pointer text-white font-Renoric px-3 rounded-full  transition-colors duration-300"
                        style={{ fontFamily: "renoric" }}
                      >
                        {links.title}
                      </h1>
                      <span className="subNav-idx">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                    {i < navLinkMobile.length - 1 && (
                      <div className="subNav-divider" />
                    )}
                  </React.Fragment>
                ))}

                {/* close button */}
                <motion.div
                  className="subNav-close"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                    delay: navLinkMobile.length * 0.048,
                  }}
                  onClick={() => setIsnavopen(false)}
                >
                  <IoCloseSharp fontSize={16} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Navbar;
