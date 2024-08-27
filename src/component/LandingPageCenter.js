import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPageCenter = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const handleClick = () => {
    setIsTextVisible(true);
    setIsTextVisible2(false);
  };

  const handleClick2 = () => {
    setIsTextVisible2(true);
    setIsTextVisible(false);
  };

  const openStreamlitApp = () => {
    // Replace with the URL of your local Streamlit app
    window.open("https://ai-waqeel.streamlit.app/", "_blank");
  };

  return (
    <>
      <div className="w-[90%] max-w-6xl bg-yellow-50 shadow-2xl rounded-xl p-5 mx-auto mt-8 flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 p-5">
          <div className="bg-slate-500 p-1 w-fit text-sm font-medium rounded-xl flex items-center gap-2">
            <button className="bg-yellow-500 p-1 pr-2 pl-2 text-white rounded-lg">
              New
            </button>
            <span className="text-white">Become a Distributor</span>
            <span className="text-orange-500 text-xl">
              <FaArrowRightLong />
            </span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-medium">
              <span className="text-blue-600">AI Lawyer:</span> your
            </h1>
            <h2 className="text-4xl md:text-5xl font-medium">personal legal</h2>
            <h2 className="text-4xl md:text-5xl font-medium">AI assistant</h2>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleClick}
              className="bg-slate-200 hover:bg-yellow-500 p-2 pl-4 pr-4 shadow-2xl text-lg font-medium border-2 border-white rounded-lg"
            >
              For Consumers
            </button>
            <button
              onClick={handleClick2}
              className="bg-slate-200 hover:bg-yellow-500 p-2 pl-4 pr-4 shadow-2xl text-lg font-medium border-2 border-white rounded-lg"
            >
              For Lawyers
            </button>
          </div>
          <div className="h-16 md:h-20">
            {isTextVisible && (
              <p className="w-full md:w-[350px] text-center lg:text-left">
                "Say goodbye to expensive legal consultations, long waits for
                appointments, and confusing legal texts."
              </p>
            )}
            {isTextVisible2 && (
              <p className="w-full md:w-[350px] text-center lg:text-left">
                "Say goodbye to routine tasks. AI Lawyer automates your legal
                research and paperwork, granting you more free time."
              </p>
            )}
          </div>
          <button
            onClick={openStreamlitApp}
            className="border-2 border-white shadow-2xl bg-yellow-400 hover:bg-slate-200 font-medium p-3 text-lg md:text-xl rounded-2xl"
          >
            Try For Free
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            className="w-[80%] lg:w-[700px] h-auto transition-all duration-500 ease-in-out"
            src="https://framerusercontent.com/images/Ezvy7w6zDDwGSWUHg0FAY0HECQ.svg?scale-down-to=1024"
            alt="AI Lawyer illustration"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageCenter;
