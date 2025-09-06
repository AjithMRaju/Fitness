import React from "react";
import Image from "next/image";
// import studioLogo from "../../../public/Assets/Unit 45 Fintess Studio logo final PNG.png";
import StudioCard from "@/Components/Card/StudioCard";
import { studioData2 } from "@/Utils/data";
import { TextParallaxContentExample } from "@/Components/Testing";

const Studio = () => {
  return (
    <section className="w-screen  bg-zinc-950 py-5">
      <div className="container py-9 h-full w-full flex flex-col justify-center items-cente ">
        {/* <Image src={studioLogo} alt="unit45fintess stufio" className="w-36" /> */}
        <div className="py-20">
          <h1
            className="text-start studio-text text-white"
            style={{ fontFamily: "poppins" }}
          >
            <span className="text-red font-bold">Unit 45 Studio</span> is an
            exclusive space crafted to complement the mission of Unit45 Fitness.
            Offering specialized fitness programs, group classNamees, and
            wellness initiatives, Unit 45 Studio is where passion meets
            performance. Whether you&apos;re seeking to elevate your training,
            find your zen, or connect with a community that motivates and
            inspires, this studio is designed to empower you every step of the
            way.
          </h1>
        </div>

        <TextParallaxContentExample />

        <div className="mt-10">
          <h1
            className="text-center text-white text-7xl mt-10"
            style={{ fontFamily: "poppins" }}
          >
            Core Offerings:
          </h1>

          <div className="flex flex-wrap mt-5 justify-center">
            {studioData2.map((card, i) => {
              return (
                <div
                  className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-3"
                  key={i}
                >
                  <StudioCard {...card} i={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
