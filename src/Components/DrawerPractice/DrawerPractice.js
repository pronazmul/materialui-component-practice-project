import { Grid } from "@material-ui/core";

import BasicDrawer from "./BasicDrawer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function DrawerPractice() {
  return (
    <Grid container direction="row">
      <ResponsiveDrawer />
      {/* <Router>
        <Grid item>
        <ResponsiveDrawer/>        
        </Grid>
        <Grid item>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Grid>
      </Router> */}
    </Grid>
  );
}
