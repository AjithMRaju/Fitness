"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "../Card/Card";

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

export const Example = () => {
  return (
    <div className="bg-secondaryBg">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-secondaryBg ">
        <div className="sticky top-10 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card {...card} key={card.id} customClass="oo-cards" />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Example;

const cards = [
  {
    id: "1",
    thumb: personalTraining,
    title: "Personal training",
    desc: "Our personal trainers are international qualified from Active iq they delivers safe and effective exercise programs for healthy individuals and groups, or those with medical clearance to exercise. They motivate clients by collaborating to set goals, providing meaningful feedback, and by being a reliable source for accountability.",
  },
  {
    id: "2",
    thumb: Olymic,
    title: "Olympic lifting",
    desc: "Welcome to the world of strength  training, Our trainers will help you to learn the basics of strength training including weight, lifting Powerlifting.",
  },
  {
    id: "3",
    thumb: Nutrition,
    title: "Nutrition Consultation",
    desc: "Our team of Certified Nutritionist will help you customise your daily calorie intake according to your desired goals including Fat loss Muscle gain General fitness Event or sport",
  },
  {
    id: "4",
    thumb: Bodybuilding,
    title: "Bodybuilding",
    desc: "If your goal is to participate in a bodybuilding show or to build a muscular body our team of experts will design a regimen of exercises designed to enhance the body’s muscular development and promote general health and fitness to display in artistic fashion pronounced muscle mass, symmetry, and definition for overall aesthetic effect.",
  },
  {
    id: "5",
    thumb: Cardio,
    title: "Cardio Training",
    desc: "Your first step in choosing the right cardio workout for you is to figure out what kind of activities you enjoy. We offer you a wide variety of cardio experiences. In U45, you have access to many options in the form of stationary bikes, elliptical trainers, treadmills, rowing machines, climbers, skiss and many more",
  },
  {
    id: "6",
    thumb: Strength,
    title: "Strength and conditioning",
    desc: "Our performance professional who uses exercise prescription to improve the performance of competitive athletes or athletic teams.This is achieved through the combination of strength training, aerobic conditioning, and other methods.",
  },
  {
    id: "7",
    thumb: Gx_class,
    title: "Gx/ Group clas",
    desc: "We offer a wide range of group class including Bodycombat Bodypump Dumbell blast Ab crusher Tabata",
  },
  {
    id: "8",
    thumb: Checkups,
    title: "Inbody Checkups / Reassement",
    desc: "We have the best in line inbody tests to analyse your Body fat percentage Muscle Mass Visceral fat Areas of obesity Vitamins deficiency and so on",
  },
  {
    id: "9",
    thumb: Injury,
    title: "Injury Rehabilitation",
    desc: "If you are suffering from skeletal structure problems such as backpain,knee pain, arthritis,tennis elbow,elbow tendonitis or sprains we have a team of physios and rehab specialist to help you Vitamins deficiency and so on",
  },
];
