"use client";
import React, { useState } from "react";
import BrandLogo from "../../Components/Logo/BrandLogo";
import MaequeeText from "@/Components/MaequeeText/MaequeeText";
import Form from "@/Components/Form/Form";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isFeedback, setIsfeedback] = useState(false);

  return (
    <main className="bg-zinc-950 py-5" id="contact">
      {/* brandLogo component for displaying logo in mobile and tabs  */}
      <BrandLogo />
      <div className="container pt-5 ">
        <h1 className=" text-8xl text-white font-Renoric font-medium mb-lg-5">
          GET IN TOUCH
        </h1>
        {/* <div
          className="w-full h-[400px]  overflow-hidden my-4"
          style={{ borderRadius: "20px" }}
        >
          <iframe
            src="https://maps.app.goo.gl/bPc9JAAkadvojoVA9"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div> */}

        <div className="row my-lg-5">
          <div className="col-sm-12 col-lg-6 mb-5">
            <h2
              className=" my-4 text-4xl bg-gradient-to-b from-gray-300 to-gray-800 bg-clip-text text-transparent"
              style={{ fontFamily: "poppins", fontWeight: "700" }}
            >
              Need Fitness Advice?
              <br /> We’ re Just a Click Away!
            </h2>
            <div>
              <div
                className="border-b border-secondaryBlack mb-4 max-w-48"
                style={{ fontFamily: "poppins" }}
              >
                <h5 className=" text-white">Phone</h5>
                <p className="text-white ">+917025033044</p>
              </div>
              <div
                className="border-b border-secondaryBlack mb-4 max-w-48"
                style={{ fontFamily: "poppins" }}
              >
                <h5 className=" text-white">Loaction</h5>
                <p className="text-white ">
                  UNIT45FITNESS <br /> 2nd floor Puthuran Plaza cochin kerala,
                  <br /> Pin 682011
                </p>
              </div>
              <div
                className="border-b border-secondaryBlack mb-4 max-w-48 "
                style={{ fontFamily: "poppins" }}
              >
                <h5 className=" text-white">Email</h5>
                <p className="text-white ">unit45fitness@gmail.com</p>
              </div>
              {/* social icons links */}

              <div className="flex">
                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/unit45_fitness/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </a>
                {/* WHATSAPP */}
                <button className="button">
                  <a
                    href="https://wa.me/917025033044"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </button>

                <button className="button">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      clipRule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="col-sm-12 col-lg-6   flex flex-col justify-center items-center">
            <section
              className={`${
                isFeedback ? "flex flex-col justify-center items-center" : ""
              } add-card page w-full h-full `}
            >
              <Form />
            </section>
          </div>
        </div>
      </div>

      <MaequeeText />
    </main>
  );
};

export default page;
