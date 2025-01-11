import { homepage } from "../data/homepage";
import { useParams } from "react-router-dom";

function Card() {
  const { id } = useParams(); // Get the dynamic ID from the route

  // Filter the array to find matching data based on the ID
  const filteredData = homepage.filter((data) => data.id === id);

  // If no data is found, return a "not found" message
  if (filteredData.length === 0) {
    return <h2>Data not found!</h2>;
  }

  return (
    <div className="col-12 w-100 mt-3">
      {filteredData.map((data, index) => (
        <div key={index}>
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
            <h3 className="fw-bold">About Role</h3>
            <p className="fs-5">{data.aboutJob}</p>
          </div>
          <div className="card-responsible">
            <h3 className="ps-2 pb-1 fw-bold">Responsibilities</h3>
            <p className="ps-2 fs-5 text-start">{data.responsibilities}</p>
          </div>
          <div className="card-requirement">
            <h3 className="ps-2 pb-1 fw-bold">Required Skills:</h3>
            <div className="d-flex gap-2 fs-5 ps-2">
              {data.requiredSkills.map((skill, i) => (
                <button
                  key={i}
                  className={
                    i % 2
                      ? i % 3 === 0
                        ? "btn btn-success"
                        : "btn btn-primary"
                      : "btn btn-secondary"
                  }
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div className="card-other-info">
            <h3 className="ps-2  pt-4 fw-bold">Company Information:</h3>
            <div>
              <div className="d-flex justify-content-between ms-2 align-item-center">
                <h4 className="pt-1 fs-2">{data.company_name}</h4>
                <div className="col-1 rounded  overflow-hidden ">
                  <img src={data.logo} alt="Company Logo" />
                </div>
              </div>
              <div className="fs-5 ps-2 pt-2">
                <p>Found in: {data.data}</p>
                <p>Location: {data.location}</p>
                <p>Post Time: {data.postTime}</p>
              </div>
              <div className="card-policy ps-2 pt-2">
                <h3 className="fw-bold">Policy of the company</h3>
                <p className="fs-5 text-start pt-2 pb-2">{data.policy}</p>
              </div>
              <div className="fs-5 ps-2 d-flex justify-content-between">
                <p>Payment: {data.payment}</p>
                <button className="btn btn-warning px-4 py-2 fw-bold text-dark">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
