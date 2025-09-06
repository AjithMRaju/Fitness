/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React from "react";
import flexingImage from "../../../Assets/flexing.jpg";
import NavigationButton from "@/Components/NavigationButton/NavigationButton";

const AboutSub = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  console.log("NavigationButton :", NavigationButton);

  return (
    <section className="bg-zinc-950 ">
      <div className="container mx-auto px-4 pt-5">
        <h1 className=" text-6xl text-white font-Renoric">
          Welcome to Most premium <br /> Gym in Kochi ever
        </h1>

        <div className="row  pt-5">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
            <Image src={flexingImage} alt="flexing-image" className="" />
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-6 text-white   mb-0"
            style={{ fontFamily: "poppins" }}
          >
            <p className="text-md  subContents mb-3">
              Unit 45 Fitness contains best in class cardio, strength, and
              stretch equipment.The only gym in kochi to provide Steam,Sauna and
              Ice bath facilities.The friendly team of Active iq uk qualified
              personal trainers who are already to help you start your journey
              to health and wellness right now!
            </p>
            <p className="text-md subContents mb-3">
              We have a wide choice of group exercise classes that are a great
              complement to any training program. We offer a wide range of
              training programs such as, Powerlifting, Weightlifting,
              Bodybuilding, Boxing, Health and wellness, Sports nutrition, and
              Injury Rehabilitation
            </p>
            <p className="text-md subContents mb-3">
              Also we are introducing a new concept U-45/90 program which
              comprises specialized workouts and nutrition plans which will
              transform your entire body whether you are looking for fat loss
              muscle gain or even general fitness within a time span of 90 days
            </p>
            <p className="text-md subContents mb-3">
              So come Join us. Your Fitness is safe with us! We will make you
              Move Better, Feel Better and Live better
            </p>

            <NavigationButton
              path="about"
              pathTitle="Explore More"
              navTitle="About"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSub;
