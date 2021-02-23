import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  overrides: {
    MuiAppBar: {
      root: {
        colorPrimary: "red"
      }
    }
  }
}));

const CustomStylingWithStyle = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.MuiAppBar}>
      <Toolbar>
        <Typography variant="h5">Hello Programmer</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default CustomStylingWithStyle;
