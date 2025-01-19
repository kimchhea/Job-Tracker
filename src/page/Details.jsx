import { homepage } from "../data/homepage";
import Card from "../components/Card";
import Sidebar_right from "../components/Sidebar_right";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Details() {
  const sliceArr = homepage.slice(1, 4);
  return (
    <div className="container-fluid ">
      <div className="col-12">
        <h1 className=" text-card-details fw-bold">Find your dream job here</h1>

        <div className="row d-flex justify-content-center gap-4 mt-5">
          {/* ///// */}
          <section className="col-3 card-more border border-dark  border-2 rounded rounded-3 px-3 ">
            <p className="fs-4 fw-bold pt-4">View more Company</p>
            {sliceArr.map((data) => (
              <div className="card px-2 mb-3" key={data.id}>
                <div className="col-12 mt-3 d-flex justify-content-between">
                  <button className=" btn btn-primary w-50 rounded rounded-5 mb-1 ">
                    {data.data}
                  </button>
                  <button className="btn btn-secondary">SAVE</button>
                </div>
                <span className="fs-4 ps-1 fw-bold">{data.company_name}</span>
                <div className="col-12 d-flex justify-content-between">
                  <p className="role fs-2 ps-1 fw-bold">{data.role}</p>
                  <div className="card-logo col-3">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
                <span className="fs-5">{data.location}</span>
                <div className="col-12 w-100 d-flex gap-3 fs-5 mt-2">
                  {data.type.map((type, index) => (
                    <button
                      className="btn btn-outline-primary px-2 "
                      key={index}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <hr className="fw-bold text-dark" />
                <div className="col-12 d-flex justify-content-between mt-1 mb-2">
                  <p className="fs-4 fw-bold">{data.salary} $/Month</p>
                  <button className="btn btn-secondary fs-5 ">
                    <Link className="nav-link" to={`details/${data.id.toString()}`}>Details</Link>
                  </button>
                </div>
              </div>
            ))}
          </section>
          {/*  */}
          <section className="col-5 card-detail border border-dark border-2 rounded ">
            <Card></Card>
          </section>

          {/*  */}
          <Sidebar_right/>
        </div>
      </div>
    </div>
  );
}

export default Details;
