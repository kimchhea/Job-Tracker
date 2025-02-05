import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

const Register = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "cam",
  });

  // State for storing validation errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  // Validate all form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo
    const isValid = validateForm();
    if (isValid) {
      alert("Registration successful!");
      navigate('/');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container px-4 d-flex bg-light rounded rounded-5">
      <section className="col-6 rounded rounded-3 border-2 border-dark col-login py-3">
        <div className="col-12">
          <div className="row">
            <div className="card-logo-login-page">
              <div className="col-12 d-flex justify-content-around px-4 pt-5">
                <div className="col-6">
                  <h2 className="fs-1 fw-bold ps-2">JOB-TRACKER</h2>
                </div>
                <div className="col-6 text-end ">
                  <h2 className="fs-2">MADE BY UNKNOWN</h2>
                  <p className="fs-3">Who knows, right?</p>
                </div>
              </div>
            </div>
            <div className="card-text-login-page px-4">
              <h1 className="ps-4">GET STARTED</h1>
              <p className="fs-2 ps-4 pt-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>

            {/* Form */}
            <form className="px-5 login-page" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="form-label ps-1 fs-3 pt-1 pb-0"
                >
                  Name
                </label>
                <div className="input-group">
                  <input
                    className="form-control py-2 fs-5"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    type="text"
                  />
                </div>
                {errors.name && (
                  <p className="text-danger fs-4 ps-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="form-label ps-1 fs-3 pt-1 pb-0"
                >
                  Email
                </label>
                <div className="input-group">
                  <input
                    className="form-control py-2 fs-5"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    type="email"
                  />
                </div>
                {errors.email && (
                  <p className="text-danger fs-4 ps-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="form-label ps-1 fs-3 pt-1 pb-0"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    className="form-control py-2 fs-5"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Example123@"
                    type="password"
                  />
                </div>
                {errors.password && (
                  <p className="text-danger fs-4 ps-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="form-label fs-3 ps-1 pt-1 pb-0"
                >
                  Country
                </label>
                <div className="input-group">
                  <select
                    name="country"
                    id="country"
                    value={formData.country} // Bind value
                    onChange={handleInputChange}
                    className="form-select py-2 fs-5"
                  >
                    <option value="cam">Cambodia</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="thi">Thailand</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-secondary w-100 mt-4 mb-2 fs-5"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="col-6">
        <div className="card-login-image py-4">
          <div className="card-img rounded rounded-4 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/7b/32/76/7b32767554774dfa9d9761f5a98dd960.jpg"
              alt="Login Visual"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
