import React from "react";

const Sidebar = () => {
  return (
    <section className="col-xxl-3 col-md-5 col-xl-3 col-sm-12 col card-search border mt-3  border-1 border-dark rounded rounded-3 px-3 py-2">
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
      <div className="card-checkbox ff mt-4 fs-4 fw-bold ">
        <p className="ff fs-3">Working Scadule</p>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="fullTime" />
          <label className="form-check-label px-4" htmlFor="fullTime">
            Full time
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="partTime" />
          <label className="form-check-label px-4" htmlFor="partTime">
            Part time
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="internship" />
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
        <p className="pt-4 fs-3ff">Employment type</p>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Fullday" />
          <label className="form-check-label px-4" htmlFor="fullday">
            Full day
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Flex" />
          <label className="form-check-label px-4" htmlFor="Flex">
            Flexibele schedule
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="shift" />
          <label className="form-check-label px-4" htmlFor="shift">
            Shift work
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Distant" />
          <label className="form-check-label px-4" htmlFor="Distant">
            Distand work
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Online" />
          <label className="form-check-label px-4" htmlFor="Online">
            online work
          </label>
        </div>
      </div>
      <div className="card-img mt-5">
        <div className="rounded rounded-2 overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/90/a8/38/90a838476fc55bcd3d1225eb80b31740.jpg"
            alt=""
          />
          <button className="btn btn-warning w-100 fs-4 fw-bold py-1 rounded-0  ">
            {" "}
            Check now
          </button>
        </div>

        <div className="rounded rounded-2 overflow-hidden mt-3">
          {" "}
          <img
            className=""
            src="https://i.pinimg.com/736x/7d/85/9f/7d859fa98f8563ca106d96a881115ff3.jpg"
            alt=""
          />
          <button className="btn btn-dark w-100 fs-4 fw-bold py-1 rounded-0 text-warning ">
            {" "}
            Check now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
