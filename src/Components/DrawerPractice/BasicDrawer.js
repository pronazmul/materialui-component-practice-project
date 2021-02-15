import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { Delete, Inbox, Mail, Send } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  drawerDiv: {
    minWidth: "150px"
  }
}));

const BasicDrawer = ({ history, location }) => {
  const classes = useStyle();

  const listData = [
    {
      Icon: <Inbox />,
      text: "Home",
      onClick: () => history.push("/")
    },
    { Icon: <Mail />, text: "About", onClick: () => history.push("/about") }
    // { Icon: <Send />, text: "Send", onClick: () => alert("clicked on Send") },
    // {
    //   Icon: <Delete />,
    //   text: "Delete",
    //   onClick: () => alert("clicked on Delete")
    // }
  ];
  return (
    <>
      <Drawer
        open={true}
        variant="permanent"
        // variant="permanent"
        // variant="persistent"
        className={classes.drawerDiv}
      >
        <List>
          {listData.map((item, index) => {
            const { text, Icon, onClick } = item;
            return (
              <ListItem button key={index} onClick={onClick}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default withRouter(BasicDrawer);
