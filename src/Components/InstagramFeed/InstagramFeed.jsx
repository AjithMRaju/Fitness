"use client";
import React from "react";
import { instaFeeds } from "../../Utils/data";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  return (
    <section className="py-5 instafeed-bg">
      <div className="container">
        <h2
          className="text-6xl text-start text-lg-center pb-3 font-bold"
          style={{ fontFamily: "poppins" }}
        >
          Follow us on{" "}
          <span className="relative inline-block testing-span">Instagram</span>
        </h2>
        <p className="text-start text-lg-center text-2xl pb-5 lg:px-56">
          Stay connected and inspired! Follow us on Instagram for the latest
          updates, fitness tips, workout motivation, and behind-the-scenes
          moments from our gym. Join our community and be part of the journey
          toward a healthier, stronger you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-5 lg:mt-10">
          {instaFeeds.map((feeds, _i) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              key={_i}
              className={`${_i}feeds_align`}
            >
              <iframe
                src={feeds.link}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                // allowTransparency="true"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
