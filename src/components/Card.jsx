import { rolesData } from "../data/detail";

function Card() {
  // const sliceArr = rolesData.slice(1,2); // Correct variable name
  return (
    <div>
      {rolesData.map((data, index) => (
        <div key={index} className="col-12 w-100 mt-3">
          <div className="d-flex justify-content-between">
            <h1>{data.role}</h1>
            <div className="d-flex justify-content-around gap-1 fs-5">
              {data.levels.map((value, i) => (
                <button
                  key={i}
                  className={i === 0 ? "btn btn-warning" : "btn btn-danger"}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <hr className="mt-4 w-100" />
          <div className="card-about-role px-2">
            <h3>About Role</h3>
            <p className="fs-5">{data.aboutJob}</p>
          </div>
          <div className="card-responsible">
            <h3 className="ps-2 pb-1">Responsibilities</h3>
            <p className="ps-2 fs-5 text-start">{data.responsibilities}</p>
          </div>
          <div className="card-requirement">
            <h3 className="ps-2 pb-1 ">Required Skills:</h3>
            <div className="d-flex gap-2 fs-5 ps-2">
              {data.requiredSkills.map((skill, i) => (
                <button key={i} className="btn btn-secondary">
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div className="card-other-info">
            <h3 className="ps-2  pt-4">Company informations : </h3>.
            <div>
              {rolesData.map((value, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-between ms-2">
                    <h4>{value.company}</h4>
                    <div className="col-1">
                      <img src={value.logo} alt="" />
                    </div>
                  </div>
                  <div className="fs-5 ps-2 pt-2">
                    <p>Found in : {value.data}</p>
                    <p>location : {value.location}</p>
                    <p>Post Time : {value.postTime}</p>
                  </div>
                  <div className="fs-5 ps-2 d-flex justify-content-between">
                    <p>Payment : {value.payment}</p>
                    <button className="btn btn-warning px-4 py-2 fw-bold text-dark">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
