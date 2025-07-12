"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
import { studioData } from "@/Utils/data";

export const TextParallaxContentExample = () => {
  const [isShomore, setIsshowMore] = useState(false);
  const slicedData = !isShomore ? studioData.slice(0, 2) : studioData;

  return (
    <div className=" py-3" style={{ borderBottom: "1px solid #b3b3b321" }}>
      {slicedData.map((card, _i) => {
        return (
          <TextParallaxContent
            key={_i}
            imgUrl={card?.bg}
            subheading={card.desc}
            heading={card.title}
          >
            <ExampleContent {...card} />
          </TextParallaxContent>
        );
      })}

      <div className="w-full flex justify-center">
        <button
          className="my-4  font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-zinc-950 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          type="submit"
          onClick={() => setIsshowMore(!isShomore)}
        >
          Explore more about Studio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
          >
            <path
              className="fill-gray-800 group-hover:fill-gray-800"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 "
        style={{
          opacity,
          background: "#0a0a0a85",
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      {/* <p className="mb-2 px-12 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p> */}
    </motion.div>
  );
};

const ExampleContent = ({ subTitle, subDesc }) => (
  <div className="mx-aut grid max--5xl grid-cols-1 gap-8 px-4 pb-16 pt-12 md:grid-cols-12">
    <h2
      className="col-span-1 text-3xl font-bold md:col-span-4 text-white"
      style={{ fontFamily: "poppins" }}
    >
      {subTitle}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-400   md:text-2xl">{subDesc}</p>
      {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p> */}
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);
