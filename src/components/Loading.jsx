import { useState, useEffect } from "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Loading ";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black opacity-60 text-white flex flex-col items-center justify-center">
      <div className=" opacity-100 mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-teal-400 animate-loading-bar absolute"></div>
      </div>
    </div>
  );
};


