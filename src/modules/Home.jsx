import React from "react";
// import { Box, Container, Typography, Button } from "@mui/material";
import {Box, Container, Typography, Button} from "@stack-ui/components";

import HomeWrapper from "./styled";
// import Imgbanner from "../assets/images/img-bnr-2.png";
import ImgBanner from "../assets/img/img-bnr.png";

const Home = () => {
  return (
    <HomeWrapper>
      {/* <Box className="bannr">
        <img src={ImgBanner} alt="logo" />
      </Box> */}
      <Container maxWidth="lg" className="homeWrapper">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Box sx={{ bgcolor: "" }} className="home">
          <Typography align="center" variant="h5" gutterBottom component="h2">
            Share & grow the world's knowledge!
          </Typography>

          <Typography
            align="center"
            variant="subtitle1"
            gutterBottom
            component="p"
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </Typography>
        </Box>
        <Box className="custom_btn">
          <Button variant="contained">Create a new Account</Button>
        </Box>

        <Box></Box>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
