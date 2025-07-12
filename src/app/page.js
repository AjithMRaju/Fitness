"use client";
import React, { useState, useEffect } from "react";
import Homes from "./home/page";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // scrolling function..
  const handleScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Hide navbar when footer is in view
      if (footerPosition < windowHeight) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Homes />
    </div>
  );
}
