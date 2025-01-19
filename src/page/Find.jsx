import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { homepage } from "../data/homepage";
import Sidebar_right from "../components/Sidebar_right";
import Find_component from "../components/Find_component";
const Find = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold ms-2">Find your dream job here</h2>
   
      <div className="col-12 mt-4 d-flex justify-content-between gap-3 ">
        <Sidebar ></Sidebar>
        <Find_component></Find_component>
        <Sidebar_right></Sidebar_right>
      </div>
    </div>
  );
};

export default Find;
