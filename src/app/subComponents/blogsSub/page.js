import React from "react";
import { BlogParagraph } from "@/Utils/data.js";
// import InstagramFeed from "@/Components/InstagramFeed/InstagramFeed.jsx";
import Image from "next/image";
import Wrod from "../../../Components/Paragraph/Word.jsx";
import NavigationButton from "@/Components/NavigationButton/NavigationButton.jsx";
import gym from "../../../../public/Assets/gym.jpg";
const page = () => {
  return (
    <section className="bg-secondaryBg" id="blogs">
      <div className="container  py-2 lg:py-5">
        <div className="pb-5">
          <div className="flex items-center">
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <h1 className="text-7xl font-Renoric  py-4 "> Blogs</h1>
          </div>

          <div className="pb-5">
            <h2
              className=" text-4xl text-start  "
              style={{ fontFamily: "poppins", fontWeight: "700" }}
            >
              Achieve Your Fitness Goals with the <br /> Best Gym in Kochi
            </h2>
            <div className="py-4">
              <Image
                src={gym}
                alt="unit45fitness"
                className="rounded-2xl h-[500px] object-cover"
              />
            </div>
            <Wrod paragraph={BlogParagraph} />
          </div>
          <div className="flex justify-center">
            <NavigationButton
              pathTitle="Explore More"
              path="blogs"
              navTitle="Blogs"
            />
          </div>
          {/* <InstagramFeed /> */}
        </div>
      </div>
    </section>
  );
};

export default page;
