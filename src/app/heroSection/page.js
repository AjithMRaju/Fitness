"use client";
import React from "react";
import Image from "next/image";
import BranadLogo from "../../../public/Assets/BrandLogo.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(0.6)" }}
      >
        <source
          src="https://videos.pexels.com/video-files/5319438/5319438-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute w-full h-full inset-0 flex   flex-col items-center justify-center container overlays">
        <h1 className="text-white text-center text-7xl font-Renoric">
          MOVE BETTER LIVE BETTER
        </h1>
        <h2 className="text-white text-center  text-2xl">
          The most exclusive premium gym in kochi
        </h2>

        <button className="group/button mt-3 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/10 border border-white/20">
          <a
            href="https://wa.me/917025033044"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white"
          >
            <span className="text-lg">Book Free Demo</span>
          </a>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>
      </div>

      {/* OVERLAY BOTTOM */}
      <div className="w-full  absolute bottom-0 overlay-bottom h-24 bg-gradient-to-b from-transparent to-[#09090B]"></div>

      <div className="container d-block d-lg-none">
        <div className="absolute top-12 brand-logo-container">
          <div className="Brand_log ">
            <Image src={BranadLogo} alt="Unit45finess" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
