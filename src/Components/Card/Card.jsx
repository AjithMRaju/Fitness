"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, desc, thumb, customClass }) => {
  const [isBtnactive, setIsbtnactiv] = useState(false);
  return (
    <div
      className={customClass}
      // className="w-full oo-cards"
      onMouseLeave={() => setIsbtnactiv(false)}
      onMouseEnter={() => setIsbtnactiv(true)}
    >
      <div
        className="rounded-lg overflow-hidden relative h-80"
        style={{ borderRadius: "20px" }}
      >
        <Image
          src={thumb}
          className="w-full h-full object-cover cursor-pointer "
          alt={title}
          style={{ objectFit: "cover" }}
        />
        {isBtnactive && (
          <>
            <div className="overlay"></div>
            <Link href="contact">
              <div
                className="border border-white text-center  enwiry-btn "
                style={{ fontFamily: "poppins" }}
              >
                Enquire Now
              </div>
            </Link>
          </>
        )}
      </div>
      <div className="mt-3">
        <h4 className=" text-medium font-Renoric mb-2 ">{title}</h4>
        <p className="font-fantasy" style={{ fontFamily: "poppins" }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
