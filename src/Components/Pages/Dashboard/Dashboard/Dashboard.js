import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
import AdminRoute from "./../../../../AdminRoute/AdminRoute";
import MakeAdmin from "../../AdminSite/MakeAdmin/MakeAdmin";
import ManageOrders from "../../AdminSite/ManageOrdes/ManageOrders";
import AddProperty from "../../AdminSite/AddProperty/AddProperty";
import ManageProperty from "../../AdminSite/ManageProperty/ManageProperty";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <NavBar />
      <Router>
        <Container>
          <h1>dashboard</h1>
          <Row className="my-5">
            <Col xs={4} md={2} className="dashboard">
              {user?.email && admin ? (
                <div className="dashboard-link">
                  <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                  <Link to={`${url}/addProperty`}>Add A Property</Link>
                  <Link to={`${url}/manageProperty`}>Manage Property</Link>
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                  <button className="btn btn-primary" onClick={logout}>
                    Log Out
                  </button>
                </div>
              ) : (
                <div>
                  <Link to={`${url}`}>My Order</Link>
                  <Link to={`${url}/payment`}>Payment</Link>
                  <Link to={`${url}/review`}>Review</Link>
                  <button className="btn btn-primary" onClick={logout}>
                    Log Out
                  </button>
                </div>
              )}
            </Col>
            <Col xs={8} md={10} className="">
              <Switch>
                <Route exact path={path}>
                  {admin || <DashboardHome />}
                  {admin && <ManageOrders />}
                </Route>
                <Route exact path={`${path}/payment`}>
                  <Payment />
                </Route>
                <Route exact path={`${path}/review`}>
                  <ReviewPage />
                </Route>
                <AdminRoute exact path={`${url}/makeAdmin`}>
                  <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${url}/manageOrders`}>
                  <ManageOrders />
                </AdminRoute>
                <AdminRoute exact path={`${url}/addProperty`}>
                  <AddProperty />
                </AdminRoute>
                <AdminRoute exact path={`${url}/manageProperty`}>
                  <ManageProperty />
                </AdminRoute>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
};

export default Dashboard;
