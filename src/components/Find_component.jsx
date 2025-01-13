import { homepage } from "../data/homepage";
const Find_component = () => {
  return (
    <section className="card-find col-9  mt-2 ">
      <div className="col-12  ">
        <p className="fs-2 ps-2">
          Search result :{" "}
          <span>
            <button className="btn btn-warning ">{homepage.length}</button>
          </span>
        </p>
        {homepage.map((data, index) => (
          <div className="box-finding-job col-12 ms-2 mt-3 rounded rounded-3 border border-dark  p-3">
            {/* //card-top// */}
            <div className="col-12 card-job-top d-flex justify-content-between">
              {/* //card-left// */}
              <div className=" d-flex ">
                <div className="logo col-1 ">
                  <div className="col-12 w-100 h-75 rounded rounded-1 overflow-hidden">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
                <div>
                  <h5 className="card-job-title fw-bold text-dark fs-3 ps-2">
                    {data.role}
                  </h5>
                  <div className="d-flex">
                    <p className="fs-5 ps-2 text-dark fw-bold">
                      {data.company_name}
                    </p>
                    {data.type.map((value, index) => (
                      <p className="ms-2 bg-warning px-2 pt-1 rounded rounded-2 ">
                        {value}
                      </p>
                    ))}
                    <p className="ps-1 fs-5 text-dark fw-bold">
                      {data.salary}$ / Month
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              {/* //card-right// */}
              <div className="card-location col-3 fs-5 text-dark">
                <p>{data.location}</p>
                <p>{data.postTime}</p>
              </div>
            </div>
            {/* //card-buttom// */}
            <li className="text-dark ps-2">{data.description}</li>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Find_component;
