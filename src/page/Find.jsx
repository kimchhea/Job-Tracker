import React from "react";

const Find = () => {
  return (
    <div className="container-fluid">
      <h2>Find your dream job here</h2>
      <div className="col-12 w-100 bg-secondary rounded rounded-5 mt-4">
        <label htmlFor="" className="ps-5  fw-bold text-light fs-3 px-2 py-3 ">
          Search for job
        </label>
        <input
          type="text"
          className="w-50 pb-1 pt-2 rounded rounded-5 p-3 fs-5"
        />
        <button className="btn btn-warning fs-5 ms-3 mb-2  rounded rounded-5 px-5 ">
          Find here
        </button>
      </div>
    </div>
  );
};

export default Find;
