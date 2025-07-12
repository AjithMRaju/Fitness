"use client";
import Marquee from "react-fast-marquee";
// import Image from "next/image";
// import BrandLogo from "../../../public/Assets/BrandLogo.png";

const MaequeeText = ({ direction, bagck }) => {
  const movingText = [
    "NEW VIDEOS DAILY",
    "BEGINNERS FRIENDLY ",
    "LIVE CONSULTING",
    "20+ TRAINERS",
  ];
  return (
    <section className={`${bagck} w-screen  py-5 `}>
      <Marquee
        direction={direction}
        gradient
        gradientColor="#000"
        gradientWidth={100}
      >
        {movingText.map((text, i) => (
          <div key={i} className="flexhhg">
            <span className="text-white font-Renoric text-8xl mx-5">
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MaequeeText;
