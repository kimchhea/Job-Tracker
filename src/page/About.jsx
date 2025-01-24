import React, { useEffect } from "react";
import part_1 from "../assets/img/part_1.png";
import part_2 from "../assets/img/part_2.png";
import part_3 from "../assets/img/part_3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="container-fluid">
      <div className="col-12 d-flex gap-4 mt-5">
        <div className="card-text-about col-5  border border-dark border-2 py-5 px-4 ">
          <h1 className=" ps-4 ">About our website </h1>
          <p className="fs-4 text-justify px-4">
            At Job Tracker, we are committed to helping job seekers and
            professionals find the right opportunities effortlessly. Our
            platform is designed to make the job search and application process
            seamless, organized, and stress-free. Whether you’re just starting
            your career or looking to advance to the next level, Job Tracker is
            here to support your journey .
          </p>
        </div>

        <div className="card-img ">
          <div className="col-12 d-flex gap-1">
            <div className="col-4 part_1 overflow-hidden" data-aos="fade-right">
              <img src={part_1} alt="" />
            </div>
            <div className="col-4 part_2 overflow-hidden" data-aos="fade-up">
              <img src={part_2} alt="" />
            </div>
            <div className="col-4 part_3 overflow-hidden" data-aos="fade-left">
              <img src={part_3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12 text">
          <h1 className="typo">JOB-TRACKER</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
