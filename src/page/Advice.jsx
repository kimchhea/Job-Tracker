import React from "react";
import Sidebar_right from "../components/Sidebar_right";
const Advice = () => {
  return (
    <div className="container-fluid ">
      <div className="col-12 main-card rounded rounded-2 px-3">
        <div className="d-flex gap-2 justify-content-between">
          <div className="col-7 card-text">
            <h1 className="py-2 fw-bold">Your Career Journey Starts Here</h1>
            <h2>
              opportunities don't happen. You create them." – Chris Grosser
            </h2>
            <p className="fs-4 py-2">
              Take control of your career path with our Job Tracker. Whether
              you're applying for your first job or aiming for your dream role,
              this tool helps you stay organized, track applications, and make
              informed decisions. Simplify your job search, set goals, and turn
              opportunities into achievements.Organize all your applications,
              set reminders, and track progress—all in one place. With the right
              tools, success is just a step away.
            </p>
          </div>
          <div className="col-4 bg-dark">
            <img
              src="https://i.pinimg.com/736x/78/74/a6/7874a6f1958c033adbbad01450805ba2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 px-2">
        <div className="row d-flex justify-content-around ">
        <Sidebar_right></Sidebar_right>
        <section className="col-8 border border-dark rounded py-3 px-3">
          <div className="col-12 d-flex justify-content-around bg-secondary px-3 py-3 rounded rounded-2">
            <input type="text" id='advice' className="form-control "/>
            <button className="btn btn-danger px-4 fs-5 py-2 mx-2">Reset</button>
            <button className="btn btn-success px-4 fs-5 py-2">Search</button>
          </div>
          
        </section>
        </div>
      </div>
    </div>
  );
};

export default Advice;
