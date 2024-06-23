import React from "react";
import FIGMA from "../assets/fig.png";
import REACT from "../assets/icons8-react.svg";
import CSS from "../assets/icons8-css.svg";
import HTML from "../assets/icons8-html.svg";
import GITHUB from "../assets/icons8-github.svg";
import TAILWIND from "../assets/icons8-tailwind.svg";
import JAVASCRIPT from "../assets/icons8-javascript.svg";
function Skills() {
  return (
    <>
      <h1 className="font-bold text-4xl m-5">SKILLS</h1>
      <div className=" grid  gap-10 sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 xl:grid-cols-5  ">
        <div className="container">
          <div className="circle w-28 h-28 relative  ">
            <div className="skill w-full h-full   rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-orange-600 ">
              <img src={HTML} alt="" className="animate-bounce-slower" />
              <p>HTML</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle w-28 h-28 relative   ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-blue-400 ">
              <img src={CSS} alt="" className="animate-bounce-slowest" />
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle w-28 h-28 relative shadow-red-500/50  ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-cyan-300 ">
              <img src={TAILWIND} alt="" className="animate-bounce-slow" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle w-28 h-28 relative shadow-red-500/50  ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-yellow-600 ">
              <img src={JAVASCRIPT} alt="" className="animate-bounce-slowest" />
              <p>Javascript</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="circle w-28 h-28 relative shadow-red-500/50  ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-black ">
              <img src={GITHUB} alt="" className="animate-bounce-slower" />
              <p>GITHUB</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle w-28 h-28 relative shadow-red-500/50  ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-sky-500 ">
              <img src={REACT} alt="" className="animate-bounce-slow" />
              <p>REACT</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle w-28 h-28 relative shadow-red-500/50  ">
            <div className="skill w-full h-full rounded-3xl absolute text-center  bg-orange-100 flex flex-col items-center justify-center shadow-2xl shadow-purple-800  ">
              <img src={FIGMA} alt="" className="animate-bounce-slow" />
              <p>FIGMA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
