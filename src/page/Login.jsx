import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
const Login = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); // use it for store user input
  const [error, setErrors] = useState({});
  const navigate = useNavigate();
  // use it for store error
  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      }
    }
    if(name ==="email"){
      if (!value.trim()) {
        error = "Email is required";
      }
     else if(!/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email format";
     }
    }
    if (name === "password"){
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  const handleChange = (e) =>{
 const  {name,value} = e.target;
 setFormData({...FormData, [name]: value});
 validateField(name, value); 
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page from reloading
    let formIsValid = true;
  
    // Validate ALL fields again before submitti
    Object.keys(FormData).forEach((key) => {
      validateField(key, FormData[key]); // Re-check each field
      if (!FormData[key].trim() || error[key]) formIsValid = false; // Check for errors
    });
  
    if (formIsValid){
      alert("Login successful!"); // Only submit if no errors
      navigate('/');

    }

      
  };
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
                <div className="col-6 text-end">
                  <h2 className="fs-2">MADE BY UNKNOW</h2>
                  <p className="fs-3">Who know right ?</p>
                </div>
              </div>
              {/* //// */}
            </div>
            <div className="card-text-login-page px-4">
              <h1 className="ps-4">GET START</h1>
              <p className="fs-2 ps-4 pt-0">
                Don't has an account ? <Link to={"/Register"}>Register</Link>
              </p>
            </div>
            {/*  */}
            <form action="" onSubmit={handleSubmit} className="px-5 py-0 login-page">
              <div>
                <label htmlFor="" className="form-label ps-1 fs-3 pt-1 pb-0">
                  Name
                </label>
                <div className="input-group">
                  <input
                    className={`form-control py-2 fs-5 ${error.name ? "border-danger" : ""}`}
                    id="name"
                    name="name"
                    value={FormData.name}
                    onChange={handleChange}
                    placeholder="Your-name"
                    type="text"
                  />
                </div>
                {error.name && <p className="text-danger fs-4 ps-1">{error.name}</p>}
              </div>
              {/*   */}
              <div>
                <label
                  htmlFor="email"
                  className="form-label ps-1 fs-3 pt-1  pb-0"
                >
                  Email
                </label>
                <div className="input-group">
                  <input
                    className={`form-control py-2 fs-5 ${
                      error.email ? "border-danger" : ""
                    }`}
                    id="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    placeholder="Yourname@gamil.com"
                    type="text"
                  />
                </div>
                {error.email && <p className="text-danger fs-4 ps-1">{error.email}</p>}
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="password"
                  className="form-label fs-3 ps-1 pt-1 pb-0"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    value={FormData.password}
                    onChange={handleChange}
                    className={`form-control fs-5 py-2 ${
                      error.password ? "border-danger" : ""
                    }`}
                    placeholder="Example123@"
                  />
                </div>
                {error.password && <p className="text-danger fs-4 ps-1">{error.password}</p>}
              </div>
              <button className="btn btn-secondary w-100 mt-4 mb-2 fs-4">
                login
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

export default Login;
