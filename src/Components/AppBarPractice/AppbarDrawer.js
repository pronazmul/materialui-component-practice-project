import {
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography
} from "@material-ui/core";
import { SupervisedUserCircleRounded } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  Drawer: {
    width: "220px"
  },
  DrawerLogo: {
    padding: "15px 0px"
  }
}));

const AppbarDrawer = ({ mobileOpen, setMobileOpen }) => {
  const classes = useStyle();
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={() => setMobileOpen(!mobileOpen)}
      classes={{
        paperAnchorLeft: classes.Drawer
      }}
    >
      <Typography align="center" className={classes.DrawerLogo} variant="h5">
        WebSite Name
      </Typography>
      <Divider />
      <List>
        <ListItem button>Home</ListItem>
        <ListItem button>
          <SupervisedUserCircleRounded />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppbarDrawer;
