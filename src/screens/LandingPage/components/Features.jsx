import React from "react";

const Features = () => {
  return (
    <div
      id="features "
      className="container flex flex-col items-center px-4 mx-auto mt-3 space-y-12 md:space-y-0 md:flex-row"
    >
      {/* Left: Content */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl text-center font-bold md:text-left">
          What's the different about manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayisBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          team
        </p>
      </div>

      {/* Right: Numbered lists  */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* List Item One */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Left: Numbering */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
                <div className="px-4  py-2 text-white rounded-full bg-brightRed md:py-1 ">01</div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Track company-wide progress</h3>
            </div>
          </div>

          <div className="">
              <h3 className="hidden mb-4 text-lg font-bold md:block">Track company-wide progress</h3>
              <p className="text-darkGrayisBlue">See how your day-tod-day task fit into the wider vision. Go from tracking progress at the milestone level all the the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
          </div>
        </div>
       
        {/* List Item Two */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
                <div className="px-4  py-2 text-white rounded-full bg-brightRed md:py-1 ">02</div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Advanced built-in report</h3>
            </div>
          </div>

          <div className="">
              <h3 className="hidden mb-4 text-lg font-bold md:block">Advanced built-in report</h3>
              <p className="text-darkGrayisBlue">Set internal delivery estimate and track progress towards company goal. Our customizable dashboard helps you build out the report you need to keep key stakeholder informed</p>
          </div>
        </div>
       
        {/* List Item Three */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
                <div className="px-4  py-2 text-white rounded-full bg-brightRed md:py-1 ">03</div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Everything you need in one place</h3>
            </div>
          </div>

          <div className="">
              <h3 className="hidden mb-4 text-lg font-bold md:block">Everything you need in one place</h3>
              <p className="text-darkGrayisBlue">Stop jumping from one service to another to communicate, store file, track task and share documents. Manage offers as an all-in-one team productivity solution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
