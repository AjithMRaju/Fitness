import { data } from "autoprefixer";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

export default function Form() {
  const [isFeedback, setIsfeedback] = useState(false);
  const [name, setName] = useState("");
  const [btnAnimatoin, setButtonanima] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setButtonanima(true);
    // setting button animation..
    setTimeout(() => {
      setButtonanima(false);
      setIsfeedback(true);
      setName(data?.name);
    }, 3000);
  };

  return (
    <>
      {!isFeedback ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form "
          style={{ fontFamily: "poppins" }}
        >
          {/* NAME FILED */}
          <label htmlFor="name" className="label">
            <span className="title">Name*</span>
            <input
              className="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="eg:Jone Doe"
              id="name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="error text-red mb-0  flex items-center text-sm gap-1">
                <MdErrorOutline />
                {errors.name.message}
              </p>
            )}
          </label>

          {/* EMAIL FILED */}
          <label htmlFor="serialCardNumber" className="label">
            <span className="title">Email*</span>
            <input
              id="email"
              className="input-field"
              type="email"
              name="input-name"
              title="Input title"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error text-red mb-0 flex items-center text-sm gap-1">
                <MdErrorOutline />
                {errors.email.message}
              </p>
            )}
          </label>

          {/* PHONE NUMBER FILED */}
          <label htmlFor="serialCardNumber" className="label">
            <span className="title">Phone Number</span>
            <input
              id="tel"
              className="input-field"
              type="tel"
              name="input-name"
              title="Input title"
              placeholder="0000-000-00"
            />
          </label>

          <label htmlFor="serialCardNumber" className="label">
            <span className="title">Message *</span>

            <textarea
              id="message"
              rows="4"
              className="input-field "
              title="Input title"
              placeholder="Leave a message..."
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="error text-red mb-0 flex items-center text-sm gap-1">
                <MdErrorOutline />
                {errors.message.message}
              </p>
            )}
          </label>

          <button className="checkout-btn " type="submit">
            {btnAnimatoin ? (
              <div className="typing-indicator">
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
              </div>
            ) : (
              <p>Send Now</p>
            )}
          </button>
        </form>
      ) : (
        <div className="w-full studio-card h-auto p-[3rem] border-solid border-2  rounded-xl ">
          <div>
            <h1
              className="text-white text-4xl "
              style={{ fontFamily: "poppins" }}
            >
              Hi {name},
            </h1>
            <p className="text-white my-4">
              Thank you for taking the time to share your feedback with us! We
              truly appreciate your insights and are glad to hear from our
              valued members. Your thoughts help us improve and enhance your
              experience at
            </p>
            <Link href="#home" className="no-underline">
              <h5 className="text-white" style={{ fontFamily: "poppins" }}>
                Unite45Fitenss
              </h5>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
