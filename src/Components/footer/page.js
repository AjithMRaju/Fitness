/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import BrandLogo from "../../../public/Assets/BrandLogo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useNavbar } from "@/Context/NavbarContext";

const page = () => {
  const navLink = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Gallery",
      path: "#gallery",
    },
    {
      title: "Contact",
      path: "#contact",
    },
    {
      title: "Blogs",
      path: "#blogs",
    },
  ];

  const { footerRef } = useNavbar();

  return (
    <footer className="bg-black w-full" id="footer" ref={footerRef}>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <ul className="p-0">
              {navLink.map((item, i) => {
                return (
                  <Link key={i} href={item.path} className="no-underline">
                    <motion.li
                      className="font- w-max text-2xl text-white hover:scale-105 duration-500 hover:ring-1"
                      style={{ fontFamily: "Renoric" }}
                    >
                      {item.title}
                    </motion.li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-start justify-content-lg-end  footer-second-sec mb-4">
            <div className="w-max ">
              <p className="text-white font-poppins">
                UNIT45FITNESS
                <br /> 2nd floor Puthuran Plaza,
                <br /> Metro Piller No – 705, KPCC Junction,
                <br /> MG Road near Maharajas college ground,
                <br /> cochin kerala, Pin 682011
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-start justify-content-lg-end  footer-second-sec mb-4">
            <div>
              <Image
                src={BrandLogo}
                alt="Unit45fitenssclub"
                className="w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center text-white p-3">
        <div className="row ">
          <div className="col-sm-12 col-lg-8 text-start mb-3">
            <span className="">All Rights Reserved | Unit45Fitness | 2023</span>
          </div>
          <div className="col-sm-12 col-lg-4 d-flex justify-content-start justify-content-lg-end pb-b">
            <div className=" cursor-pointer">
              <a
                href="https://www.instagram.com/unit45_fitness/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram fontSize={20} />
              </a>
            </div>
            <div className="mx-3 cursor-pointer">
              <a
                href="https://wa.me/917025033044"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp fontSize={20} />
              </a>
            </div>
            <div className=" cursor-pointer">
              <CiMail fontSize={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default page;
