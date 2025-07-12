"use client";
import Image from "next/image";
import BrandLogo from "../../Components/Logo/BrandLogo";

//stock images
import personalTraining from "../../../public/Assets/Gallery/galler-new-1.jpg";
import Olymic from "../../../public/Assets/Gallery/galler-new-2.jpg";
import Nutrition from "../../../public/Assets/Gallery/galler-new-3.jpg";
import Bodybuilding from "../../../public/Assets/Gallery/galler-new-4.jpg";
import Cardio from "../../../public/Assets/Gallery/galler-new-5.jpg";
import Strength from "../../../public/Assets/Gallery/galler-new-6.jpg";
import Gx_class from "../../../public/Assets/Gallery/gallery-new-7.jpg";
import Injury from "../../../public/Assets/Gallery/gallery-new-8.jpg";

const page = () => {
  // images adding to an array...
  const imgArray = [
    {
      thum: personalTraining,
    },
    {
      thum: Olymic,
    },
    {
      thum: Bodybuilding,
    },
    {
      thum: Cardio,
    },
    {
      thum: Strength,
    },
    {
      thum: Gx_class,
    },
    {
      thum: Injury,
    },
    {
      thum: Nutrition,
    },
  ];
  return (
    <section className="">
      <main className="bg-secondaryBg pt-lg-5" id="gallery">
        {/* brandLogo component for displaying logo in mobile and tabs  */}
        <BrandLogo />
        <div className="container py-3 py-lg-5 mt-lg-5 separetor-line">
          <div className="flex items-center">
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <div className="headBox"></div>
            <h1 className="text-7xl font-Renoric  py-4 "> Gallery</h1>
          </div>
          <div className="row my-lg-5">
            {imgArray.map((image, i) => (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3  "
                key={i}
              >
                <div className="galleryImage h-72">
                  <Image
                    src={image.thum}
                    alt="Uint45fitnes_Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
