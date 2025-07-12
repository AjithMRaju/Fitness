"use client";
import React from "react";
import Image from "next/image";
import BrandLogo from "../../Components/Logo/BrandLogo";
import MVVcard from "@/Components/Card/MVVcard";
// images
import flexingImage from "../../../public/Assets/flexing.jpg";
import BodyBuilding from "../../../public/Assets/bodybuilding-new.webp";
import Olympic from "../../../public/Assets/olympic-lifting-new.jpeg";
import Strength from "../../../public/Assets/strngth-cordinationing-new.jpg";
// import Strength from "../../../public/Assets/strength.jpeg";

const page = () => {
  const cardContent1 =
    "To Evolve as a brand that educates people to be aware of the importance of health and fitness and how it is beneficial for their life";
  const cardContent2 =
    "We won’t compromise on anything less our trainers are internationally qualified ,we have world class fitness equipment our services are at the Premium level,each penny you spend on your fitness and healthwe will guarantee your results";
  const cardContent3 =
    "Introducing a whole new international level of fitness concepts to kerala";

  return (
    <main className=" ">
      <section className="bg-zinc-950 lg:pt-10" id="about">
        {/* brandLogo component for displaying logo in mobile and tabs  */}
        <BrandLogo />
        <div className="container mx-auto px-4 pt-5 mt-lg-5">
          <h1 className=" text-6xl text-white font-Renoric">
            Welcome to Most premium <br /> Gym in Kochi ever
          </h1>

          <div className="row my-5 pb-5">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              <Image src={flexingImage} alt="flexing-image" className="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 text-white  mb-0">
              <p className="text-md  subContents mb-3">
                Unit 45 Fitness contains best in class cardio, strength, and
                stretch equipment.The only gym in kochi to provide Steam,Sauna
                and Ice bath facilities.The friendly team of Active iq uk
                qualified personal trainers who are already to help you start
                your journey to health and wellness right now!
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
                muscle gain or even general fitness within a time span of 90
                days
              </p>
              <p className="text-md subContents mb-3">
                So come Join us. Your Fitness is safe with us! We will make you
                Move Better, Feel Better and Live better
              </p>
            </div>
          </div>
        </div>
        {/* second secton mision vission */}
        <div className="container pb-5 ">
          <div className="row pb-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <MVVcard title="Mision" desc={cardContent1} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <Image
                src={BodyBuilding}
                alt="BodyBuilding"
                className="w-full h-full "
                // className="w-full h-full filter grayscale hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <MVVcard title="Vission" desc={cardContent2} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 ">
              <Image
                src={Olympic}
                alt="BodyBuilding"
                className="w-full h-full "
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <MVVcard title="Values" desc={cardContent3} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 ">
              <Image
                src={Strength}
                alt="BodyBuilding"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
