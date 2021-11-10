import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useAuth from "./../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
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
              <h4>Sign In</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label for="name">User Name</label>
                  <input
                    name="name"
                    id="name"
                    className="form-control"
                    type="name"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    name="email"
                    id="email"
                    className="form-control"
                    type="email"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-3">
                      <label for="password">Password</label>
                    </div>

                    <div className="col-9">
                      <Link to="/" className="float-right">
                        forgot your password?
                      </Link>
                    </div>
                  </div>

                  <input
                    name="password"
                    id="password"
                    className="form-control"
                    type="password"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="form-group my-3">
                  <button className="btn btn-primary btn-block">Login</button>
                </div>
              </form>

              <p className="text-center">O</p>

              <div className="form-group">
                <Link to="/registration" className="btn btn-success btn-block">
                  Register
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

export default Login;
