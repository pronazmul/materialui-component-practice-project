import { withStyles } from "@material-ui/core";

const style = {
  div: {
    height: 500,
    width: 500,
    border: "2px solid #ccc"
  }
};

const CustomStylingWithStyle = (props) => {
  const { classes } = props;
  return <div className={classes.div}>WElcome</div>;
};
export default withStyles(style)(CustomStylingWithStyle);
