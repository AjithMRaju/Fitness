"use client";
import React, { useState } from "react";
import BrandLogo from "../../Components/Logo/BrandLogo";
import Word from "../../Components/Paragraph/Word";
import Image from "next/image";
import gym from "../../Assets/gym.jpg";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isBlog, setIsBloge] = useState(false);

  const blogs = [
    {
      blogTitle: "Convenient Hours, 365 Days a Year ",
      blogeDescs:
        "Being the best Gym in Kochi, We understand that your schedule can be hectic. That’s why we offer a wide range of time slots from 05:00 AM to 12:00 PM, and yes, we’re open 365 days a year. Whether you’re an early riser or prefer to work out later in the morning, we’ve got you covered.",
    },
    {
      blogTitle: "FREE Customized Diet Counseling",
      blogeDescs:
        "Achieving your fitness goals isn’t just about working out; it’s also about eating right. That’s why we offer FREE customized diet counseling to help you make the best food choices for your body and goals.",
    },
    {
      blogTitle: "FREE Assessments and Reassessments",
      blogeDescs:
        "We believe in progress tracking. With our FREE assessments and reassessments, you can see how far you’ve come on your fitness journey. Our expert trainers will guide you every step of the way.",
    },
    {
      blogTitle: "FREE Inbody Analysis ",
      blogeDescs:
        "Get to know your body like never before with our FREE Inbody Analysis. Discover details about your fat percentage, muscle percentage, water content, metabolic rate, visceral fat, and more. With regular checkups, you can track your transformation and make data-driven decisions about your fitness routine.",
    },
    {
      blogTitle: "30+ Variety Group Sessions ",
      blogeDescs:
        "Boredom is never an option at Unit 45 Fitness Centre. We offer over 30 variety group sessions, including Pilates, Bollywood Mix, Strong by Zumba, Nice Play, Yoga, Move On, Battle Fit, and many more. Spice up your workouts and keep things exciting with our diverse classes.",
    },
    {
      blogTitle: "FREEZING AND TRANSFERRING  ",
      blogeDescs:
        "Life happens, and we understand that. That’s why we offer the flexibility to freeze your membership for genuine reasons. Plus, you can transfer your membership to friends and family, so they can join you on your fitness journey.",
    },
    {
      blogTitle: " Top-of-the-Line Equipment  ",
      blogeDescs:
        "We take fitness seriously, and that’s why we provide only the best equipment with international standards. Our TUNTURI PROFESSIONAL equipment, known for its Scandinavian design from Finland, ensures a safe and effective workout every time.",
    },
    {
      blogTitle: " Certified Trainers  ",
      blogeDescs:
        "Our team of trainers is not just experienced but also certified. They are here to guide you, motivate you, and ensure you’re getting the most out of your workouts while minimizing the risk of injury.",
    },
  ];

  const Paragraph =
    "Are you ready to start on a journey towards a healthier, fitter you? Look no further than Unit 45 Fitness Centre, the best gym in Kochi. We’re more than just a gym; we’re your fitness partner on the path to a better, healthier you. With a wide range of exclusive offerings, we’ve got everything you need to achieve your fitness goals. ✨";

  return (
    <main className="">
      <section className="bg-secondaryBg pt-lg-5" id="blogs">
        {/* brandLogo component for displaying logo in mobile and tabs  */}
        <BrandLogo />
        <div className="container  py-2 pt-lg-5">
          <div className="pb-5">
            <div className="flex items-center">
              <div className="headBox"></div>
              <div className="headBox"></div>
              <div className="headBox"></div>
              <div className="headBox"></div>
              <h1 className="text-7xl font-Renoric  py-4 "> Blogs</h1>
            </div>

            <div className="py-lg-3">
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
              <Word paragraph={Paragraph} />
            </div>

            <div className="row mt-5 ">
              <h2
                className="font-Renoric text-6xl text-start text-lg-center  py-3 py-lg-5"
                style={{ letterSpacing: "-2px" }}
              >
                Here’s why Unit 45 Fitness Centre is,
                <br /> the best Gym in Kochi:
              </h2>
              {!isBlog
                ? blogs.slice(0, 4).map((blog, i) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-3 min-h-323px "
                      key={i}
                    >
                      <div className=" hover:bg-white transition-colors duration-300 w-full border h-full border-gray-400 rounded-2xl p-2 flex flex-column justify-content-between">
                        <h4 className="font-Renoric ">{blog?.blogTitle}</h4>
                        <p className="">{blog?.blogeDescs}</p>
                        <div className="w-full flex justify-items-end">
                          <div className="bg-black text-white w-[40px] h-[40px] rounded-full text-center font-fantasy flex justify-center items-center">
                            {i + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                : blogs.map((blog, i) => (
                  <div
                    className="col-12 col-md-6 col-lg-3 mb-3 min-h-323px "
                    key={i}
                  >
                    <div className=" hover:bg-white transition-colors duration-300 w-full border h-full border-gray-400 rounded-2xl p-2 flex flex-column justify-content-between">
                      <h4 className="font-Renoric ">{blog?.blogTitle}</h4>
                      <p className="font-">{blog?.blogeDescs}</p>
                      <div className="w-full flex justify-items-end">
                        <div className="bg-black text-white w-[40px] h-[40px] rounded-full text-center font-fantasy flex justify-center items-center">
                          {i + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={() => setIsBloge(!isBlog)}
              className="mt-4 font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-zinc-950 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              type="submit"
            >
              {!isBlog ? "Show More" : "Show less"}
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
      </section>
    </main>
  );
};

export default page;

// backup

{
  /* <section className="bg-secondaryBg" id="blogs">
  <div className="container  py-5">
    <div>
      <div className="flex items-center">
        <div className="headBox"></div>
        <div className="headBox"></div>
        <div className="headBox"></div>
        <div className="headBox"></div>
        <h1 className="text-8xl font-fantasy  py-4 "> Blogs</h1>
      </div>

      <div className="row mt-5">
        {blogs.map((blog, i) => (
          <div className="col-12 col-md-6 col-lg-3 mb-3 min-h-323px " key={i}>
            <div className=" hover:bg-white transition-colors duration-300 w-full border h-full border-gray-400 rounded-2xl p-4 flex flex-column justify-content-between">
              <h4 className="font-fantasy ">{blog?.blogTitle}</h4>
              <p className="font-fantasy">{blog?.blogeDescs}</p>
              <div className="w-full flex justify-items-end">
                <div className="bg-black text-white w-[40px] h-[40px] rounded-full text-center font-fantasy flex justify-center items-center">
                  {i + 1}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */
}
