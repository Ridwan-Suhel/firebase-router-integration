import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container py-5 mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2>Please Sign up here</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group mt-4">
              <label className="mb-2">Name: </label>
              <input
                className="form-control"
                type="text"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mt-4">
              <label className="mb-2">Email: </label>
              <input
                className="form-control"
                type="email"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group mt-4">
              <label className="mb-2">Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                required
                placeholder="Your Password"
              />
            </div>
            <div className="form-group mt-4">
              <input
                className="form-control text-white bg-dark py-2"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <p className="lead">
            Have an account?{" "}
            <Link to="/login" className="text-danger">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
