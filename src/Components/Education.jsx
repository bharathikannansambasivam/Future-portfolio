import React from "react";
import SSLC from "../assets/SSLC.png";
import HSC from "../assets/HSC.png";
import UG from "../assets/UG.png";
import "../CSS/timeline.css";
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold p-5">MY EDUCATIONS</h1>
      <div className="timeline  ">
        <div className="containers py-3 px-12 relative sm:w-2/4  sm:left-0 ">
          <img
            src={SSLC}
            alt=""
            className=" absolute h-14 sm:w-14  rounded-full   -right-7 top-8 z-10 hidden sm:block"
          />
          <div className="text-box py-5 px-8 bg-white  relative rounded-lg text-md border-2 border-black">
            <img
              src={SSLC}
              alt=""
              className="h-14 w-14  rounded-full sm:hidden "
            />
            <h2>
              Sri Kumara Gurupara Matric Higher Secondary School -
              Thiruppanandal
            </h2>

            <small>2014-2019</small>
            <p>
              I studied from 6th to 10th standard at this school. I also wrote
              the 10th SSLC examinations and scored 81%.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline ">
        <div className="containers right-con py-3 px-12 relative sm:w-2/4  sm:left-1/2 ">
          {/* <img
            src={HSC}
            alt=""
            className="h-14 w-14  rounded-full  sm:absolute  sm:-left-7 sm:top-8 sm:z-10 "
          /> */}
          <img
            src={HSC}
            alt=""
            className="h-14 w-14  rounded-full  absolute  -left-7 top-8 z-10 hidden sm:block"
          />
          <div className="text-box py-5 px-8 bg-white border-2 border-black relative rounded-lg text-md ">
            <img
              src={HSC}
              alt=""
              className="h-14 w-14  rounded-full sm:hidden "
            />
            <h2>Little Flower Higher Secondary School - Kumbakonam</h2>{" "}
            <small>2019-2021</small>
            <p>
              For my 11th and 12th standard education, I also wrote the 12th HSC
              exam and I scored 509 out of 600 , which is approximately 85%.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline   ">
        <div className="containers py-3 px-12 relative sm:w-2/4  sm:left-0">
          <img
            src={UG}
            alt=""
            className="h-14 w-14  rounded-full  absolute  -right-8 top-8 z-10  hidden sm:block"
          />
          <div className="text-box py-5 px-8 border-2 border-black bg-white relative rounded-lg text-md">
            <img
              src={UG}
              alt=""
              className="h-14 w-14  rounded-full sm:hidden "
            />
            <h2>Government Arts College (Autonomous), Kumbakonam</h2>

            <small>
              {" "}
              <b>BSc in Computer Science </b>
              (2021-2024)
            </small>

            <p>
              My current CGPA: 9.11 (Until 5th Semester) ,Expected Graduation:
              May 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
