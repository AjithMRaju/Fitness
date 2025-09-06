import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Word from "../../../Components/Paragraph/Word";
import NavigationButton from "@/Components/NavigationButton/NavigationButton";
import Example from "@/Components/HorizontalCarousel/HorizontalCarousel";
// ---
import Img2 from "../../../../public/Assets/pexels-willpicturethis-1954524.jpg";

const ServiceSub = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const paragraph =
    "Unit 45 Fitness, a Premium Gym in Kochi, your destination for comprehensive fitness solutions. We specialize in Fitness Classes, Gym Membership, Personal Training, Weight Loss programs, and Health and Wellness services. ";
  return (
    <div className="w-screen    bg-secondaryBg" id="services">
      <Container className="separetor-line pt-5">
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
          <NavigationButton
            pathTitle="Enquire Now"
            path="contact"
            navTitle="Contact"
          />
        </div>
        {/* displaying in mobile */}
        {/* <div className="row pt-4 justify-center d-lg-none">
          {programsData.slice(0, 3).map((items, i) => {
            return (
              <Col
                key={i}
                sx={12}
                md={6}
                lg={4}
                className="mb-5 flex justify-center"
              >
                <Card {...items} />
              </Col>
            );
          })}
        </div> */}

        <Example />

        <div className="flex justify-center">
          <NavigationButton
            pathTitle="Explore More"
            path="services"
            navTitle="Services"
          />
        </div>
      </Container>
    </div>
  );
};

export default ServiceSub;
