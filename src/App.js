import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Login/Registration";
import AuthProvider from "./Context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Propertyes from "./Components/Pages/Property/Propertyes";
import PropertyDetails from "./Components/Pages/PropertyDetails/PropertyDetails";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route exact path="/property">
              <Propertyes />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/property/:id">
              <PropertyDetails />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
