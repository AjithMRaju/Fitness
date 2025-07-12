"use client";
import React, { createContext, useContext, useState, useRef } from "react";

// **1. Create Context**
const NavbarContext = createContext();

// **2. Create Provider Component**
export const NavbarProvider = ({ children }) => {
  const [isNavbarEnabled, setIsNavbarEnabled] = useState("Home");
  const footerRef = useRef();

  return (
    <NavbarContext.Provider
      value={{ isNavbarEnabled, setIsNavbarEnabled, footerRef }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

// **3. Create a custom hook for easier access**
export const useNavbar = () => {
  return useContext(NavbarContext);
};
