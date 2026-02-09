import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    city: "",
    country: "",
    terms: false,
  });

  const [flash, setFlash] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFlash({
        show: true,
        message: "Passwords do not match",
        type: "danger",
      });
      return;
    }

    if (!formData.terms) {
      setFlash({
        show: true,
        message: "Please accept Terms & Conditions",
        type: "warning",
      });
      return;
    }

    // Success flash
    setFlash({
      show: true,
      message: "Welcome to Zerodha 🚀",
      type: "success",
    });

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href =
        "https://dashboard-sigma-silk-37.vercel.app/holdings";
    }, 2000);
  };

  return (
    <div className="container p-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4 text-primary">
              Create Your Zerodha Account
            </h2>

            {/* ✅ FLASH MESSAGE HERE */}
            {flash.show && (
              <div className={`alert alert-${flash.type} text-center`} role="alert">
                {flash.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* --- all your input fields here --- */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  I agree to the Terms & Conditions
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 btn-lg"
              >
                Create Account
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
