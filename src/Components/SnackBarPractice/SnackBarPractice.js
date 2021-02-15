import { Slide, Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useContext } from "react";
import { ContexApi } from "../../App";

const SnackBarPractice = ({ state, message, type }) => {
  const [snackBarData, setSnackBarData] = useContext(ContexApi);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarData({
      ...snackBarData,
      snackBarOpen: false
    });
  };

  return (
    <>
      <Snackbar
        open={snackBarData.snackBarOpen}
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          severity={snackBarData.snackBarType}
          elevation={6}
          variant="filled"
          onClose={handleClose}
        >
          {snackBarData.snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
export default SnackBarPractice;
