import { Box, Button } from "@material-ui/core";
import { useContext } from "react";
import { ContexApi } from "../../App";

const SnackBarLeader = () => {
  const [snackBarData, setSnackBarData] = useContext(ContexApi);

  return (
    <>
      <Box m={5}>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            setSnackBarData({
              ...snackBarData,
              snackBarOpen: true,
              snackBarMessage: "File Successfully Uploded",
              snackBarType: "success"
            })
          }
        >
          Success Message
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() =>
            setSnackBarData({
              ...snackBarData,
              snackBarOpen: true,
              snackBarMessage: "Upload Failed",
              snackBarType: "error"
            })
          }
        >
          Failed Message
        </Button>
        <Button
          color="inherit"
          variant="contained"
          onClick={() =>
            setSnackBarData({
              ...snackBarData,
              snackBarOpen: true,
              snackBarMessage: "We will let you know",
              snackBarType: "info"
            })
          }
        >
          Info Mesage
        </Button>
      </Box>
    </>
  );
};

export default SnackBarLeader;
