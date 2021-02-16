import {
  AppBar,
  IconButton,
  makeStyles,
  MenuItem,
  Toolbar,
  Typography,
  Menu as NavMenu,
  List,
  ListItem,
  ListItemAvatar,
  Hidden
} from "@material-ui/core";
import {
  AirlineSeatIndividualSuiteSharp,
  ListAltRounded,
  Menu,
  SupervisedUserCircleRounded
} from "@material-ui/icons";
import { useState } from "react";
import AppbarDrawer from "./AppbarDrawer";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  logoText: {
    flexGrow: 1
  },
  dextopMenu: {
    display: "flex",
    flex: "row",
    fontWeight: "bolder",
    transition: "3s ease"
  },
  menuIcon: {
    "&:hover": {
      borderBottom: " 2px solid red"
    }
  }
}));

const AppBarPractice = () => {
  const classes = useStyle();

  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar className={classes.root} position="fixed" color="primary">
        <Toolbar variant="regular" disableGutters={false}>
          <Typography className={classes.logoText} variant="h6">
            WebSite
          </Typography>
          <Hidden xsDown>
            <List className={classes.dextopMenu}>
              <ListItem className={classes.menuIcon} button>
                Home
              </ListItem>
              <ListItem className={classes.menuIcon} button>
                <SupervisedUserCircleRounded />
              </ListItem>
            </List>
          </Hidden>
          <Hidden smUp>
            <List className={classes.dextopMenu}>
              <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
                <ListAltRounded color="secondary" />
              </IconButton>
            </List>
            <AppbarDrawer
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarPractice;
