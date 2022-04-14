import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }

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
          <p className="lead mt-3">
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
