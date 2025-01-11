import React from "react";

const Sidebar = () => {
  return (
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
        <p className="pt-4 fs-4 ff">Employment type</p>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Fullday" />
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
          <input type="checkbox" className="form-check-input" id="shift" />
          <label className="form-check-label px-4" htmlFor="internship">
            Shift work
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Distant" />
          <label className="form-check-label px-4" htmlFor="projectWork">
            Distand work
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="Online" />
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
  );
};

export default Sidebar;
