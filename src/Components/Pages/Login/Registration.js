import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useAuth from "./../../../Hooks/useAuth";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h4>Registration</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="name">User Name</label>
                  <input
                    name="name"
                    id="name"
                    className="form-control"
                    type="name"
                    onChange={handleOnBlur}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    id="email"
                    className="form-control"
                    type="email"
                    onChange={handleOnBlur}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    id="password"
                    className="form-control"
                    type="password"
                    onChange={handleOnBlur}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    name="password2"
                    id="password"
                    className="form-control"
                    type="password"
                    onChange={handleOnBlur}
                  />
                </div>

                <div className="form-group my-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center">O</p>

              <div className="form-group">
                <Link to="/login" className="btn btn-success btn-block">
                  all ready register ?
                </Link>
              </div>
              {authError && <Alert>{authError}</Alert>}
            </div>
            <button onClick={handleGoogleSignIn}>
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
