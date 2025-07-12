"use client";

const MVVcard = ({ title, desc }) => {
  return (
    <div className="w-full studio-card  h-full p-3 flex flex-col justify-center items-center text-white  hover:bg-secondaryBlack duration-300">
      <h2 className="font-poppins text-2xl" style={{ fontFamily: "poppins",fontWeight:"" }}>
        {title}
      </h2>
      <p className="mt-2 text-center">{desc}</p>
    </div>
  );
};

export default MVVcard;
