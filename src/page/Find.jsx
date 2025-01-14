import Sidebar from "../components/Sidebar";
import { homepage } from "../data/homepage";
import Find_component from "../components/Find_component";
const Find = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold ms-2">Find your dream job here</h2>
   
      <div className="col-12 mt-4 d-flex justify-content-between gap-2 ">
        <Sidebar ></Sidebar>
        <Find_component></Find_component>
      </div>
    </div>
  );
};

export default Find;
