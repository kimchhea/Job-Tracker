import "bootstrap/dist/css/bootstrap.min.css";
import { homepage } from "../data/homepage";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <body>
      <div className="container-fluid mt-4 d-flex">
        <div className="d-flex justify-content-between gap-3 ">
          <Sidebar></Sidebar>
          {/* ///////////////////////////// m// */}
          <section className="card-recommended col-xxl-9 col-xl-9 col-md-7 col-sm-12 border border-dark border-1 pe-5  ps-2 rounded rounded-2 mt-3">
            <div className="col-12 d-flex justify-content-between ms-3 mb-2 mt-3">
              <h1>
                Recommened Job
                <span>
                  <button className="btn fs-5 btn-primary disabled rounded round-4 ms-4">
                    {homepage.length}
                  </button>
                </span>
              </h1>
              <p className="fs-3  ff fw-bold ">Short by last updated</p>
            </div>
            <div className="row card-details mt-1 ">
                {/* //// */}
                {homepage.map((data) => (
                  <div className=" col-xxl-4 col-xl-6 col-md-12 col-sm-12" key={data.id}>
                    <div className="col-11 card card-job px-3 py-2 mb-2 w-100 ">
                    <div className="col-12 mt-3 d-flex justify-content-between ">
                      <button className=" btn btn-primary disabled w-50 rounded rounded-5 mb-1 ">
                        {data.data}
                      </button>
                      <button className="btn btn-secondary">SAVE</button>
                    </div>
                    <span className="fs-4 ps-1 fw-bold">
                      {data.company_name}
                    </span>
                    <div className="col-12 d-flex justify-content-between">
                      <p className="role fs-2 ps-1 fw-bold">{data.role}</p>
                      <div className="card-logo col-3">
                        <img src={data.logo} alt="" />
                      </div>
                    </div>
                    <span className="fs-5">{data.location}</span>
                    <div className="col-12  d-flex gap-3 fs-5 mt-2">
                      {data.type.map((type, index) => (
                        <button
                          className="btn btn-outline  px-2 "
                          key={index}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <hr className="fw-bold text-dark" />
                    <div className="col-12 d-flex justify-content-between mt-1">
                      <p className="fs-4 fw-bold">{data.salary} $/Month</p>
                      <button className="btn btn-secondary fs-5 ">
                        <Link
                          to={`details/${data.id.toString()}`}
                          className="nav-link fs-3"
                        >
                          Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Home;
