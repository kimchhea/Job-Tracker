import React from "react";
import Sidebar from "../components/Sidebar";
import { homepage } from "../data/homepage";
import Find_component from "../components/Find_component";
const Find = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold ms-2">Find your dream job here</h2>
      <div className="col-12 w-100 bg-secondary rounded rounded-5 mt-4 ">
        <label
          htmlFor=""
          className="ps-5 label-search  fw-bold text-light fs-3 px-2 py-3 "
        >
          Search for job
        </label>
        <input
          type="text"
          className="search-input w-50 pb-1 pt-2 rounded rounded-5  p-3 fs-5"
        />
        <button className="btn btn-warning fs-5 ms-3 mb-2  rounded rounded-5 px-5 ">
          Find here
        </button>
      </div>
      <div className="col-12 mt-4 d-flex justify-content-between gap-2 ">
        <Sidebar ></Sidebar>
        <Find_component></Find_component>
      </div>
    </div>
  );
};

export default Find;
