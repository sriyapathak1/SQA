import React from "react";
import { useForm } from "react-hook-form";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  StackInputGroup,
  Box,
  Container,
  Typography,
  Button,
  CheckBox,
} from "@stack-ui/components";

// const theme = createTheme();

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <LockOutlinedIcon /> */}
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6}> */}
          <StackInputGroup
            size="sm"
            labelText="Name"
            type="text"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {/* <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                /> */}
          {errors?.firstName?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}

          {/* <Grid item xs={12} sm={6}> */}
          <StackInputGroup
            size="sm"
            labelText="last Name"
            type="text"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
          {errors?.lastName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          {/* </Grid> */}
        </Box>
        <Box item xs={12}>
          <StackInputGroup
            size="sm"
            labelText="Email"
            type="email"
            {...register("email", {
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
          />
        </Box>
        {/* <Grid item xs={12}> */}
        <StackInputGroup
          size="sm"
          labelText="Name"
          type="password"
          // autoComplete="new-password"
        />
        {/* </Grid> */}
        <Box item xs={12}>
          <CheckBox label="label" name="checkbox" />
          {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
        </Box>
        {/* </Box> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Box container justifyContent="flex-end">
          {/* <Grid item>
                <Link href="#" variant="body2"> */}
          Already have an account? Sign in
          {/* </Link>
              </Grid> */}
        </Box>
        {/* </Box> */}
      </Box>
    </Container>
    // </ThemeProvider>
  );
};

export default Register;
