import "bootstrap/dist/css/bootstrap.min.css";
import { homepage } from "../data/homepage";
function Home() {
  return (
    <body >
      <div className="container-fluid  w-100 ">
        <div className="col-12 mt-4 d-flex justify-content-center ">
          <section className="col-3 card-search ">
            <div className="card mt-2">
              <div className="card-img">
                <img
                  src="https://i.pinimg.com/736x/03/75/40/037540fb35377f2760dd7ea921178aea.jpg"
                  alt=""
                />
                <button className="btn btn-warning w-100 fs-4 fw-bold py-1 text-dark">
                  {" "}
                  Check now
                </button>
              </div>
            </div>
            <h3 className="ps-1 pt-2 ff">Fillter</h3>
            <div className="card-checkbox ff mt-4 fs-5 fw-bold ">
              <p className="ff fs-4">Working Scadule</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="fullTime"
                />
                <label className="form-check-label px-4" htmlFor="fullTime">
                  Full time
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="partTime"
                />
                <label className="form-check-label px-4" htmlFor="partTime">
                  Part time
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="internship"
                />
                <label className="form-check-label px-4" htmlFor="internship">
                  Internship
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="projectWork"
                />
                <label className="form-check-label px-4" htmlFor="projectWork">
                  Project work
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="volunteering"
                />
                <label className="form-check-label px-4" htmlFor="volunteering">
                  Volunteering
                </label>
              </div>
              <p className="pt-4 fs-4 ff">Employment type</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Fullday"
                />
                <label className="form-check-label px-4" htmlFor="fullTime">
                  Full day
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="Flex" />
                <label className="form-check-label px-4" htmlFor="partTime">
                  Flexibele schedule
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="shift"
                />
                <label className="form-check-label px-4" htmlFor="internship">
                  Shift work
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Distant"
                />
                <label className="form-check-label px-4" htmlFor="projectWork">
                  Distand work
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Online"
                />
                <label className="form-check-label px-4" htmlFor="volunteering">
                  online work
                </label>
              </div>
              
            </div>
            <div className="card-img mt-5 rounded-2 overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/90/a8/38/90a838476fc55bcd3d1225eb80b31740.jpg"
                  alt=""
                />
                <button className="btn btn-warning w-100 fs-4 fw-bold py-1 text-dark mt-2">
                  {" "}
                  Check now
                </button>
              </div>
          </section>
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
                        <a href="Details" className="nav-link">
                        Details
                        </a>
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
