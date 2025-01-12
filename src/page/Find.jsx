import React from "react";
import Sidebar from "../components/Sidebar";
import { homepage } from "../data/homepage";
const Find = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold">Find your dream job here</h2>
      <div className="col-12 w-100 bg-secondary rounded rounded-5 mt-4 ">
        <label
          htmlFor=""
          className="ps-5 label-search  fw-bold text-light fs-3 px-2 py-3 "
        >
          Search for job
        </label>
        <input
          type="text"
          className="search-input w-50 pb-1 pt-2 rounded rounded-5 p-3 fs-5"
        />
        <button className="btn btn-warning fs-5 ms-3 mb-2  rounded rounded-5 px-5 ">
          Find here
        </button>
      </div>
      <div className="col-12 mt-4 d-flex justify-content-between gap-2 ">
        <Sidebar></Sidebar>

        <section className="card-find col-9  mt-2 ">
          <div className="col-12  ">
            <p className="fs-2 ps-2">
              Search result :{" "}
              <span>
                <button className="btn btn-warning ">{homepage.length}</button>
              </span>
            </p>
            {homepage.map((data, index) => (
              <div className="box-finding-job col-12 ms-2 mt-2 rounded rounded-1 bg-secondary px-2 py-2">
                {/* //card-top// */}
                <div className="col-12 card-job-top d-flex justify-content-between">
                  {/* //card-left// */}
                  <div className=" d-flex ">
                    <div className="logo col-1 ">
                      <div className="col-12 w-100 h-75 rounded rounded-1 overflow-hidden">
                        <img src={data.logo} alt="" />
                      </div>
                    </div>
                    <div>
                      <h5 className="card-job-title fw-bold text-light fs-3 ps-2">
                        {data.role}
                      </h5>
                      <div className="d-flex">
                        <p className="fs-5 ps-2 text-light fw-bold">
                          {data.company_name}
                        </p>
                        {data.type.map((value, index) => (
                          <p className="ms-2 bg-warning px-2 pt-1 rounded rounded-2 ">
                            {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* //card-right// */}
                  <div className="card-location col-3 fs-5 text-light">
                  <p>
                    {data.location}
                  </p>
                  <p>
                    {data.postTime}
                  </p>
                  </div>
                </div>
                {/* //card-buttom// */}
                <div className="card-job-bottom">
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Find;
