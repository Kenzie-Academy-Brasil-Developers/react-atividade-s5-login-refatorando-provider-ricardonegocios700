import { Switch, Route } from "react-router";
import Dashboard from "../components/Dashboard/dasboard";
import Login from "../components/Login/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
