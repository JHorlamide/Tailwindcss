import React from "react";

import IllustrationIntro from "../../../assets/img/illustration-intro.svg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="container flex flex-col-reverse  items-center px-2 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
    >
      {/* Left: Content */}
      <div className="flex flex-col mt-5 mb-32 space-y-2 md:w-1/2">
        <h1 className="max-w-lg text-3xl font-bold text-center md:text-6xl md:text-left">
          Bring everyone together to build better products
        </h1>

        <p className="max-w-sm text-center text-darkGrayisBlue md:text-left">
          Manage makes it simple for software team to plan day-to-day tasks
          while keeping the larger team gaol in view
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="/get-started"
            className="p-3 px-6 pt-2 mt-5 bg-brightRed text-white rounded-full baseline hover:bg-brightRedLight md:mt-0"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div>
        <img src={IllustrationIntro} alt="illustrationImage" />
      </div>
    </div>
  );
};

export default Hero;
