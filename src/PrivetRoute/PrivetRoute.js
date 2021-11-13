import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";
import { Spinner } from "react-bootstrap";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Spinner animation="border" variant="primary" />;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
