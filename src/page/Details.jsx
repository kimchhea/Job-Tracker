import { homepage } from "../data/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
function Details() {
  const sliceArr = homepage.slice(1, 4);
  return (
    <div className="container-fluid ">
      <div className="col-12 w-100">
        <h1 className="ps-4">Find your dream job here</h1>

        <div className="row d-flex justify-content-evenly mt-5">
          {/* ///// */}
          <section className="col-4 card-more border  border-2 rounded   ">
            <p className="fs-4 fw-bold pt-4">View more Company</p>
            {sliceArr.map((data) => (
              <div className="card px-3 mb-4" key={data.id}>
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
                  <button className="btn btn-secondary fs-5 ">Details</button>
                </div>
              </div>
            ))}
          </section>
          <section className="col-7 card-details border  border-2 rounded ">
            <div className="col-12 w-100 mt-3">
              <div className="d-flex justify-content-between">
                <h1>Sr. UX Designer</h1>
                <div className="d-flex justify-content-around gap-2 ">
                  <button className="btn btn-primary">Expert</button>
                  <button className="btn btn-warning">Post more</button>
                  <button className="btn btn-secondary">Experience</button>
                </div>
              </div>
              <hr className="mt-4 w-100 " />
              <div className="card-about-role px-2 ">
                <h3>
                  About role 
                </h3>
                
              </div>
              <div className="card-responsible"></div>
              <div className="card-requirement"></div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Details;
