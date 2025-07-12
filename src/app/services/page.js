import React from "react";
import { Col, Container } from "react-bootstrap";
import Image from "next/image";
// images
import personalTraining from "../../../public/Assets/personal-training-new.jpg";
import Olymic from "../../../public/Assets/olympic-lifting-new.jpeg";
import Nutrition from "../../../public/Assets/nutrition-new.jpg";
import Bodybuilding from "../../../public/Assets/bodybuilding-new.webp";
import Cardio from "../../../public/Assets/cardio-training-new.jpg";
import Strength from "../../../public/Assets/strngth-cordinationing-new.jpg";
import Gx_class from "../../../public/Assets/gsx-clasess-newt.jpg";
import Checkups from "../../../public/Assets/body-checkups-new.jpg";
import Injury from "../../../public/Assets/stretching-new.jpg";
import Img2 from "../../../public/Assets/pexels-willpicturethis-1954524.jpg";
// ---
import Card from "@/Components/Card/Card";
import Word from "../../Components/Paragraph/Word";
import BrandLogo from "@/Components/Logo/BrandLogo";
import NavigationButton from "@/Components/NavigationButton/NavigationButton";

const page = () => {
  const programsData = [
    {
      thumb: personalTraining,
      title: "Personal training",
      desc: "Our personal trainers are international qualified from Active iq they delivers safe and effective exercise programs for healthy individuals and groups, or those with medical clearance to exercise. They motivate clients by collaborating to set goals, providing meaningful feedback, and by being a reliable source for accountability.",
    },
    {
      thumb: Olymic,
      title: "Olympic lifting",
      desc: "Welcome to the world of strength  training, Our trainers will help you to learn the basics of strength training including weight, lifting Powerlifting.",
    },
    {
      thumb: Nutrition,
      title: "Nutrition Consultation",
      desc: "Our team of Certified Nutritionist will help you customise your daily calorie intake according to your desired goals including Fat loss Muscle gain General fitness Event or sport",
    },
    {
      thumb: Bodybuilding,
      title: "Bodybuilding",
      desc: "If your goal is to participate in a bodybuilding show or to build a muscular body our team of experts will design a regimen of exercises designed to enhance the body’s muscular development and promote general health and fitness to display in artistic fashion pronounced muscle mass, symmetry, and definition for overall aesthetic effect.",
    },
    {
      thumb: Cardio,
      title: "Cardio Training",
      desc: "Your first step in choosing the right cardio workout for you is to figure out what kind of activities you enjoy. We offer you a wide variety of cardio experiences. In U45, you have access to many options in the form of stationary bikes, elliptical trainers, treadmills, rowing machines, climbers, skiss and many more",
    },
    {
      thumb: Strength,
      title: "Strength and conditioning",
      desc: "Our performance professional who uses exercise prescription to improve the performance of competitive athletes or athletic teams.This is achieved through the combination of strength training, aerobic conditioning, and other methods.",
    },
    {
      thumb: Gx_class,
      title: "Gx/ Group clas",
      desc: "We offer a wide range of group class including Bodycombat Bodypump Dumbell blast Ab crusher Tabata",
    },
    {
      thumb: Checkups,
      title: "Inbody Checkups / Reassement",
      desc: "We have the best in line inbody tests to analyse your Body fat percentage Muscle Mass Visceral fat Areas of obesity Vitamins deficiency and so on",
    },
    {
      thumb: Injury,
      title: "Injury Rehabilitation",
      desc: "If you are suffering from skeletal structure problems such as backpain,knee pain, arthritis,tennis elbow,elbow tendonitis or sprains we have a team of physios and rehab specialist to help you Vitamins deficiency and so on",
    },
  ];

  const paragraph =
    "Unit 45 Fitness, a Premium Gym in Kochi, your destination for comprehensive fitness solutions. We specialize in Fitness Classes, Gym Membership, Personal Training, Weight Loss programs, and Health and Wellness services. ";
  return (
    <main className="">
      <div className="w-screen   overflow-hidden bg-secondaryBg" id="services">
        {/* brandLogo component for displaying logo in mobile and tabs  */}
        <BrandLogo />
        <Container className="separetor-line mt-lg-5 pt-lg-5">
          <div className="flex items-center">
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <h1 className="text-7xl font-Renoric py-4 font-medium ">
              {" "}
              Our Signature Program
            </h1>
          </div>

          <div className="my-3">
            <Image
              src={Img2}
              className=" rounded-2xl h-[500px] object-cover w-full"
              alt="gymServices"
            />
          </div>
          <div className="w-full  my-3 ">
            <Word paragraph={paragraph} />
          </div>
          <div className=" mt-3 mb-5">
            <NavigationButton pathTitle="Enquire Now" path="contact" />
          </div>

          <div className="row pt-4">
            {programsData.map((items, i) => {
              return (
                <Col key={i} sx={12} md={6} lg={4} className="mb-5">
                  <Card {...items} />
                </Col>
              );
            })}
          </div>
        </Container>
      </div>
    </main>
  );
};

export default page;
