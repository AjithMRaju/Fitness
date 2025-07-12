import React from "react";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "../../../public/Assets/BrandLogo.png";

const BrandLogo = () => {
  return (
    <div className="container pt-2 d-lg-none">
      <Link href="/">
        <div className="Brand_log ">
          <Image src={brandLogo} alt="Unit45finess" className="" />
        </div>
      </Link>
    </div>
  );
};

export default BrandLogo;
