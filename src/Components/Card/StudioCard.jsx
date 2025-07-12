import React from "react";
import { motion } from "framer-motion";

const StudioCard = ({ title, desc, bg ,i}) => {
  return (
    <div className=" p-2 studio-card flex items-center h-44">
      <div className="flex ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: (i * 20) / 100 }}
          className="pe-3 me-2 mt-1"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: bg,
          }}
        ></motion.div>
        <div>
          <h4
            className="text-white text-2xl mb-3"
            style={{ fontFamily: "poppins" }}
          >
            {title}
          </h4>
          <p className="text-gray-400 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
