import React from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../../../Shared/NavBar/NavBar";
import "./Dashboard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Payment from "../Pay/Payment";
import ReviewPage from "../ReviewPage/ReviewPage";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "./../../../../Hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <NavBar />
      <h1>dashboard</h1>
      <Router>
        <Row>
          <Col xs={6} md={4} className="dashboard">
            <div>
              <Link to={`${url}`}>My Order</Link>
              <Link to={`${url}/payment`}>Payment</Link>
              <Link to={`${url}/review`}>Review</Link>
              <Link onClick={logout}>Log Out</Link>
            </div>
            <div>
              <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
              <Link to={`${url}/addProperty`}>Add A Property</Link>
              <Link to={`${url}/manageProperty`}>Manage Property</Link>
              <Link to={`${url}/makeAdmin`}>Make Admin</Link>
              <Link onClick={logout}>Log Out</Link>
            </div>
          </Col>
          <Col xs={6} md={8}>
            <Switch>
              <Route exact path={path}>
                <DashboardHome />
              </Route>
              <Route exact path={`${path}/payment`}>
                <Payment />
              </Route>
              <Route exact path={`${path}/review`}>
                <ReviewPage />
              </Route>
              <Route exact path={`${url}/makeAdmin`}>
                <ReviewPage />
              </Route>
              <Route exact path={`${url}/manageOrders`}>
                <ReviewPage />
              </Route>
              <Route exact path={`${url}/addProperty`}>
                <ReviewPage />
              </Route>
              <Route exact path={`${url}/manageProperty`}>
                <ReviewPage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
};

export default Dashboard;
