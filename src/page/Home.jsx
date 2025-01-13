import "bootstrap/dist/css/bootstrap.min.css";
import { homepage } from "../data/homepage";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <body>
      <div className="container-fluid  w-100 ">
        <div className="col-12  d-flex justify-content-center ">
          <Sidebar></Sidebar>
          {/* /////////////////////////////// */}
          <section className="card-recommended  w-100 col-7">
            <div className="col-12 d-flex justify-content-between ms-5">
              <h1>
                Recommened Job
                <span>
                  <button className="btn fs-5 btn-primary rounded round-4 ms-3">
                    {homepage.length}
                  </button>
                </span>
              </h1>
              <p className="fs-3 ff fw-bold text-end">Short by last updated</p>
            </div>
            <div className="card-details col-12 mt-4">
              <div className="row w-100 d-flex gap-1 justify-content-between ms-5 fs-3">
                {/* //// */}
                {homepage.map((data) => (
                  <div className=" card-job mb-4" key={data.id}>
                    <div className="col-12 mt-3 d-flex justify-content-between">
                      <button className=" btn btn-primary w-50 rounded rounded-5 mb-1 ">
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
                        <Link
                          to={`details/${data.id.toString()}`}
                          className="nav-link"
                        >
                          Details
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Home;
