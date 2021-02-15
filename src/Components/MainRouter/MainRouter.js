import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PokeDexHome from "../PokeDexHome/PokeDexHome";
import SinglePokomon from "../SinglePokomon/SinglePokomon";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokeDexHome />
        </Route>

        <Route path="/:key?">
          <SinglePokomon></SinglePokomon>
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
