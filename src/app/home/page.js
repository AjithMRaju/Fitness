import React from "react";
import Hero from "../heroSection/page";
import Gallery from "../gallery/page";
import Contact from "../contact/page";
import MaequeeText from "../../Components/MaequeeText/MaequeeText.jsx";
import AboutSub from "../subComponents/aboutSub/page";
import ServiceSub from "../subComponents/serviceSub/page";
import BlogSubcomponent from "../subComponents/blogsSub/page";
import Studio from "../studio/page";
import InstagramFeed from "../../Components/InstagramFeed/InstagramFeed";

const page = () => {
  return (
    <div id="home">
      <Hero />
      <AboutSub />
      <MaequeeText direction={"left"} bagck="bg-zinc-950" />
      <ServiceSub />
      <Studio />
      <Gallery />
      <BlogSubcomponent />
      {/* <InstagramFeed /> */}
      <Contact />
    </div>
  );
};

export default page;
