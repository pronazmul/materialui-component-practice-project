import { Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonAppbar from "./PokemonAppbar";
import PokemonCard from "./PokemonCard";

const useStyle = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(2)
  },
  gridSpacing: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
}));

const PokeDexHome = (props) => {
  // Get Third perty API Data

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((data) => setUserData(data.data.results))
      .catch(console.error);
  }, []);

  const [filterData, setFilterData] = useState("");

  console.log(filterData);

  const classes = useStyle();
  return (
    <>
      {/* Main Header */}
      <PokemonAppbar filterData={filterData} setFilterData={setFilterData} />
      {/* Main Card Component */}
      <Grid container className={classes.spacing}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid
          item
          container
          xs={12}
          sm={8}
          spacing={1}
          className={classes.gridSpacing}
        >
          {userData.map((item) => (
            <Grid item key={item.url} xs={4} sm={3}>
              {item.name.includes(filterData) && <PokemonCard {...item} />}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </>
  );
};

export default PokeDexHome;
