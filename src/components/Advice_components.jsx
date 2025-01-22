import React from 'react'
import { Teachjobs } from "../data/advice";
const Advice_components = () => {
  return (
    <section className="col-6 border border-2 border-dark rounded py-3 px-3 mt-3">
            <div className="col-12 d-flex justify-content-around bg-secondary px-3 py-3 rounded rounded-2">
              <input type="text" id="advice" className="form-control " />
              <button className="btn btn-danger px-4 fs-5 py-2 mx-2">
                Reset
              </button>
              <button className="btn btn-success px-4 fs-5 py-2">Search</button>
            </div>
            <section className="col-12 mt-2 py-2 ">
              {Teachjobs.map((data, index) => (
                <div
                  key={index}
                  className="card-advice border border-dark border-1 px-2 py-2 rounded rounded-2 mb-3"
                >
                  <h3>{data.role}</h3>
                  {data.advice.map((data, index) => (
                    <span className="fs-5" key={index}>
                      {data}
                    </span>
                  ))}
                  <ul className="fs-5 fw-bold ">Advantages : </ul>
                  {data.advantages.map((data, index) => (
                    <li key={index} className="fs-5 ps-4">
                      {data}
                    </li>
                  ))}
                  <ul className="fs-5 fw-bold pt-2">Disadvantages : </ul>
                  {data.disadvantages.map((data, index) => (
                    <li key={index} className="fs-5  ps-4">
                      {data}
                    </li>
                  ))}
                </div>
              ))}
            </section>
          </section>
  )
}

export default Advice_components