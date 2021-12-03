import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import HomeWrapper from "./styled";

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           h1: 'h2',
//           h2: 'h2',
//           h3: 'h2',
//           h4: 'h2',
//           h5: 'h2',
//           h6: 'h2',
//           subtitle1: 'h2',
//           subtitle2: 'h2',
//           body1: 'span',
//           body2: 'span',
//         },
//       },
//     },
//   },
// });
const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
      <HomeWrapper>
        <Box sx={{ bgcolor: "" }} className="home">
          <Typography  align="center" variant="h5" gutterBottom component="h2">
            Share & grow the world's knowledge!
          </Typography>

          <Typography align="center" variant="subtitle1" gutterBottom component="p">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
          </Typography>
        </Box>
        <Box className="custom_btn">
        <Button variant="contained">Create a new Account</Button>
        </Box>
      </HomeWrapper>
      <Box>
        
      </Box>
    </Container>
  );
};

export default Home;
