import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { homepage } from "../data/homepage";
import Sidebar_right from "../components/Sidebar_right";
import Find_component from "../components/Find_component";
const Find = () => {
  return (
    <div className="container-fluid ">
      <h2 className="fw-bold ">Find your dream job here</h2>

      <div className="col-12 mt-4 d-flex justify-content-around ">
        <Sidebar></Sidebar>
        <Find_component></Find_component>
        <section className="col-2 border border-dark border-1 rounded px-3 mt-3">
          <h1 className="pt-4 fs-4 fw-bold">finding internships ?</h1>
          <div className="col-12 card-img rounded overflow-hidden ">
            <img
              src="https://i.pinimg.com/736x/70/a7/88/70a788952d27643ea43f9d571665a528.jpg"
              alt="poster-one"
            />
          </div>
          <div className="col-12 card-img rounded overflow-hidden mt-3">
            <img
              src="https://i.pinimg.com/736x/d0/fc/90/d0fc90a50f18a0e1b5e8e14630fbe050.jpg"
              alt="poster-two"
            />
          </div>
          <div className="col-12 card-img rounded overflow-hidden mt-3">
            <img
              src="https://i.pinimg.com/736x/d0/fc/90/d0fc90a50f18a0e1b5e8e14630fbe050.jpg"
              alt="poster-two"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Find;
