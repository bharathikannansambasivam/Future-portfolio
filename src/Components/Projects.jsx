import React from "react";

import TODO from "../assets/pro-image/todo.png";
import QUIZ from "../assets/pro-image/quiz.png";
import PASSWORDGENERATOR from "../assets/pro-image/password.png";
import GITHUBAPI from "../assets/pro-image/githubapi.png";
import GITHUBICON from "../assets/pro-image/githubicon.svg";

import "../CSS/timeline.css";
function Projects() {
  return (
    <div className="flex  flex-wrap overflow-hidden gap-3 justify-center">
      <div className="border-2 p-2 rounded-md md:w-5/12  flex items-center justify-center flex-col">
        <div className=" ">
          <img src={QUIZ} alt="" className=" h-64  rounded-lg  " />
        </div>

        <div>
          <h1 className="font-bold text-xl">Task Tracker - a TODO app</h1>
          <p className="flex px-5">
            A simple Todo List app built with React and styled with Tailwind
            CSS. Added Progressive Web App (PWA) functionality for enhanced
            accessibility and installability across devices
          </p>
          <div className="flex  gap-2  justify-center my-2">
            <button className="border rounded-md p-1 px-2 flex items-center">
              <img src={GITHUBICON} alt="" />
              GitHub-Repo
            </button>
            <button className="border rounded-md p-1 px-2">Live</button>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded-md md:w-5/12  flex items-center justify-center flex-col  ">
        <div className=" ">
          <img src={TODO} alt="" className=" h-64  rounded-lg  p-4 " />
        </div>

        <div>
          <h1 className="font-bold text-xl">Task Tracker - a TODO app</h1>
          <p className="flex flex-shrink ">
            A simple Todo List app built with React and styled with Tailwind
            CSS. Added Progressive Web App (PWA) functionality for enhanced
            accessibility and installability across devices
          </p>
          <div className="flex  gap-2  justify-center my-2">
            <button className="border rounded-md p-1 px-2">GitHub-Repo</button>
            <button className="border rounded-md p-1 px-2">Live</button>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded-md md:w-5/12 flex items-center justify-center flex-col  ">
        <div className=" ">
          <img
            src={PASSWORDGENERATOR}
            alt=""
            className=" h-64  rounded-lg  p-4 "
          />
        </div>

        <div>
          <h1 className="font-bold text-xl">Task Tracker - a TODO app</h1>
          <p className="flex flex-shrink ">
            A simple Todo List app built with React and styled with Tailwind
            CSS. Added Progressive Web App (PWA) functionality for enhanced
            accessibility and installability across devices
          </p>
          <div className="flex  gap-2  justify-center my-2">
            <button className="border rounded-md p-1 px-2">GitHub-Repo</button>
            <button className="border rounded-md p-1 px-2">Live</button>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded-md md:w-5/12 flex items-center justify-center flex-col  ">
        <div className=" ">
          <img src={GITHUBAPI} alt="" className=" h-64  rounded-lg  p-4 " />
        </div>

        <div>
          <h1 className="font-bold text-xl">Task Tracker - a TODO app</h1>
          <p className="flex flex-shrink ">
            A simple Todo List app built with React and styled with Tailwind
            CSS. Added Progressive Web App (PWA) functionality for enhanced
            accessibility and installability across devices
          </p>
          <div className="flex  gap-2  justify-center my-2">
            <button className="border rounded-md p-1 px-2">GitHub-Repo</button>
            <button className="border rounded-md p-1 px-2">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
