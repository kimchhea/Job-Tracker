import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container px-4 d-flex bg-light rounded rounded-5">
    <section className="col-6  rounded rounded-3 border-2 border-dark  col-login py-3">
      <div className="col-12">
        <div className="row">
          <div className="card-logo-login-page">
            {/* //// */}
            <div className="col-12 d-flex justify-content-around px-4 pt-5">
              <div className="col-6">
                <h2 className="fs-1  fw-bold ps-2">JOB-TRACKER</h2>
              </div>
              <div className="col-6 text-end ">
                <h2 className="fs-2">MADE BY UNKNOW</h2>
                <p className="fs-3">Who know right ?</p>
              </div>
            </div>
            {/* //// */}
          </div>
          <div className="card-text-login-page px-4">
            <h1 className="ps-4">GET START</h1>
            <p className="fs-2 ps-4 pt-0">
              Alrady has an account ? <Link to={"/login"}>Login</Link>
            </p>
          </div>
          {/*  */}
          <form action="" className="px-5 login-page">
            <div>
              <label htmlFor="" className="form-label ps-1 fs-3 pt-1 pb-0">
                Name
              </label>
              <div className="input-group">
                <input
                  className="form-control py-2 fs-5"
                  id="name"
                  placeholder="Your-name"
                  type="text"
                />
              </div>
            </div>
            {/*  */}
            <div>
              <label htmlFor="" className="form-label ps-1 fs-3 pt-1  pb-0">
                Email
              </label>
              <div className="input-group">
                <input
                  className="form-control py-2 fs-5"
                  id="email"
                  placeholder="Yourname@gamil.com"
                  type="text"
                />
              </div>
            </div>
            {/*  */}
            <div>
              <label htmlFor="" className="form-label fs-3 ps-1 pt-1 pb-0">
                Country
              </label>
              <div className="input-group">
                <select
                  name="country"
                  id="country"
                  className="form-select py-2 fs-5"
                >
                  <option value="cam">Cambodia</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="thi">Thailand</option>
                </select>
              </div>
            </div>
            <button className="btn btn-secondary w-100 mt-4 mb-2 fs-5">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
    <section className="col-6">
      <div className="card-login-image  py-4 ">
        <div className="card-img  rounded rounded-5 overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/90/ea/97/90ea97757fd683ac4ddc6ce2b8798f70.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
  );
};

export default Register