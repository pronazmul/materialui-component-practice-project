import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { useFormik } from "formik";
import YupValidation from "./YupValidation";
import * as yup from "yup";

const FromikPractice = () => {
  const formik = useFormik({
    initialValues: {
      email: undefined,
      password: undefined
    },
    validationSchema: yup.object().shape(YupValidation),

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    }
  });

  return (
    <Box m={5} p={4}>
      <Paper>
        <Box p={3}>
          <Typography variant="h6">Formik Practice</Typography>
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default FromikPractice;
