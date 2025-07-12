/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { HiMiniPause } from "react-icons/hi2";
import { useNavbar } from "@/Context/NavbarContext";
import Link from "next/link";
import brandLogo from "../../../public/Assets/BrandLogo.png";
import Image from "next/image";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isNavOpen, setIsnavopen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileNavVisibel, setIsMobilenav] = useState(true);

  const { isNavbarEnabled, setIsNavbarEnabled, footerRef } = useNavbar();

  let lastScrollY = 0;
  const navLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Gallery",
      path: "gallery",
    },
    {
      title: "Blogs",
      path: "blogs",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  // for mobile navigation
  const navLinkMobile = [
    {
      title: "About",
      path: "about",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Gallery",
      path: "gallery",
    },
    {
      title: "Blogs",
      path: "blogs",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    }
  };

  // FOR NAVBAR IN LARGE DEVICES
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // FOR NAVBAR IN MOBILE DEVICES

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // If the footer is visible in the viewport, hide the navbar
        if (footerTop <= viewportHeight) {
          setIsMobilenav(false);
        } else {
          setIsMobilenav(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div
        className="d-none d-lg-block"
        style={{
          position: "fixed",
          top: 0,
          zIndex: "99",
          width: "100%",
          color: "white",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div
          className=""
          style={{
            background: "#1111112e",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="container flex justify-between align-items-center py-2 "
            // style={{
            //   background: "#1111112e",
            //   borderRadius: "10px",
            //   backdropFilter: "blur(10px)",
            // }}
          >
            <Link href="/">
              <div
                className="Brand_log "
                onClick={() => setIsNavbarEnabled("Home")}
              >
                <Image src={brandLogo} alt="Unit45finess" className="" />
              </div>
            </Link>
            <div className="flex py-3 ">
              {navLink.map((links, _i) => {
                return (
                  <div key={_i} className="px-3  navs">
                    <Link
                      href={links.path}
                      className="no-underline text-white "
                    >
                      <h5
                        className={`${
                          links.title === isNavbarEnabled && "text-gold "
                        } px-3 py-1 mb-0 `}
                        // className="px-3 py-1 mb-0 text-white hover:text-gray-500 navTags"
                        onClick={() => setIsNavbarEnabled(links?.title)}
                      >
                        {links.title}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*   MOBILE NAVIGATION BAR */}
      {isMobileNavVisibel && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-3 d-block d-lg-none menu-btn w-48 h-16 bg-red rounded-[30px]  fixed bottom-5   transform -translate-x-1/2 text-white overflow-hidden"
            // className="p-3 menu-btn w-48 h-16 bg-red rounded-[30px]  fixed bottom-5 left-1/2  transform -translate-x-1/2 text-white overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center  cursor-pointer"
              onClick={() => setIsnavopen(!isNavOpen)}
            >
              {isNavOpen ? (
                <Link href="/" className="no-underline w-full text-center">
                  <motion.h1
                    className=" mb-0 cursor-pointer text-white font-Renoric px-3 rounded-full text-center w-full"
                    onClick={() => {
                      setIsnavopen(false);
                    }}
                    style={{ fontFamily: "renoric" }}
                  >
                    Home
                  </motion.h1>
                </Link>
              ) : (
                <>
                  <span className="text-md font-medium  flex items-center justify-evenly ">
                    <span className="icon-span text-red">
                      <HiMiniPause fontSize={30} color="red" />
                    </span>
                    <h1
                      className="mb-0 menu-text "
                      style={{ fontFamily: "renoric" }}
                    >
                      Menu
                    </h1>
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {isMobileNavVisibel && (
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="subMenu  transform -translate-x-1/2 bg-red w-max h-[400px] bottom-[6rem] rounded-[30px] "
              // className="subMenu left-1/2 transform -translate-x-1/2 bg-red w-[200px] h-[400px] bottom-[6rem] rounded-[30px] "
              onMouseLeave={() => setIsnavopen(false)}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                {navLinkMobile.map((links, i) => (
                  <Link key={i} href={links?.path} className="no-underline">
                    <h1
                      className="subNav-h1 cursor-pointer text-white font-Renoric px-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                      onClick={() => {
                        setIsnavopen(false);
                      }}
                      style={{ fontFamily: "renoric" }}
                    >
                      {links.title}
                    </h1>
                  </Link>
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden w-8 h-8 bg-white text-red rounded-full flex items-center justify-center mt-4 "
                  onClick={() => setIsnavopen(false)}
                >
                  <IoCloseSharp fontSize={20} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </main>
  );
};

export default page;
