import React from "react";

const FeatureCard = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {/* First Card */}
      <div className="bg-yellow-50 p-5 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://framerusercontent.com/images/7XTzud4nMHuO4cW6c8iplnBQGQ.gif?scale-down-to=1024"
          alt="Ask AI Lawyer"
          className="w-full h-auto max-w-xs hover:animate-pulse transition-transform duration-300 ease-in-out"
        />
        <div className="text-center">
          <h1 className="text-xl font-medium">Ask AI Lawyer</h1>
          <p className="text-sm mt-2">
            Legal research never been easier. Have a conversation with your
            virtual assistant, gain insights and simple answers to your complex
            questions in real-time.
          </p>
        </div>
      </div>
      {/* Second Card */}
      <div className="bg-yellow-50 p-5 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://framerusercontent.com/images/W8IHdHUPOwkBzfTiaWhNCKwfyeo.gif?scale-down-to=1024"
          alt="AI document handling"
          className="w-full h-auto max-w-xs hover:animate-pulse transition-transform duration-300 ease-in-out"
        />
        <div className="text-center">
          <h1 className="text-xl font-medium">AI document handling</h1>
          <p className="text-sm mt-2">
            The fastest way to summarize agreements, convert images to text,
            translate documents, and more.
          </p>
        </div>
      </div>
      {/* Third Card */}
      <div className="bg-yellow-50 p-5 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://framerusercontent.com/images/7ktKLpfri5nPJt6fYmVLMuECw.gif?scale-down-to=1024"
          alt="Internet-powered"
          className="w-full h-auto max-w-xs hover:animate-pulse transition-transform duration-300 ease-in-out"
        />
        <div className="text-center">
          <h1 className="text-xl font-medium">Internet-powered</h1>
          <p className="text-sm mt-2">
            Rapid web research, completing hours of analysis in seconds.
          </p>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="bg-yellow-50 p-5 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://framerusercontent.com/images/RebYWPuoxNzLpsK8eM1Y6R2tU4.gif?scale-down-to=1024"
          alt="Multi-platform"
          className="w-full h-auto max-w-xs hover:animate-pulse transition-transform duration-300 ease-in-out"
        />
        <div className="text-center">
          <h1 className="text-xl font-medium">Multi-platform</h1>
          <p className="text-sm mt-2">
            Access our platform with a simple tap – on the web, iOS, or Android.
          </p>
        </div>
      </div>
      {/* Fifth Card */}
      <div className="bg-yellow-50 p-5 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://framerusercontent.com/images/amc33KXVJZ4HfilQVZrYACJYMvY.gif?scale-down-to=1024"
          alt="Personalized for you"
          className="w-full h-auto max-w-xs hover:animate-pulse transition-transform duration-300 ease-in-out"
        />
        <div className="text-center">
          <h1 className="text-xl font-medium">Personalized for you</h1>
          <p className="text-sm mt-2">
            Customize and educate it to match your unique preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
