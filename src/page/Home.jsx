import "bootstrap/dist/css/bootstrap.min.css";
function Hone() {
  return (
    <body>
      <div className="container-fluid ff w-100 ">
        <div className="col-12 mt-4 d-flex justify-content-start w-100 ">
          <section className="col-3 card-search ">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://i.pinimg.com/736x/03/75/40/037540fb35377f2760dd7ea921178aea.jpg"
                  alt=""
                />
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
          </section>
          <section className="card-recommended  w-100 col-7">
            <div className="col-12 d-flex justify-content-around">
             
              <h1>
                Recommened Job
                <span>
                  <button className="btn fs-5 btn-primary rounded round-4 ms-3">
                    368
                  </button>
                </span>
              </h1>
              <p className="fs-3 ff fw-bold text-end">Short by last updated</p>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Hone;
