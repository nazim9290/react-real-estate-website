import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "./../Components/Hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
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
