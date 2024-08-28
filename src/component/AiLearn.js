import React from "react";
import { CiLaptop } from "react-icons/ci";

const AiLearn = () => {
  return (
    <div className="flex flex-col items-center mt-32 gap-6">
      <div className="flex text-blue-700 text-center gap-3 text-lg items-center border-2 border-slate-300 w-fit p-2 pr-4 pl-4 rounded-3xl">
        <CiLaptop />
        <span>Learn</span>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-5xl font-medium">How to use AI Lawyer</h1>
        <br />
        <p className="text-lg w-[600px] text-center text-teal-600">
          The tutorial video shows you how good it is to integrate our lawyer
          online tool into your life.
        </p>
      </div>
      {/* Embed YouTube video */}
      <iframe
        width="820"
        height="550"
        className="shadow-2xl rounded-xl"
        src="https://www.youtube.com/embed/U_1lRprmt8c"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="AI Lawyer Tutorial"
      ></iframe>
    </div>
  );
};

export default AiLearn;
