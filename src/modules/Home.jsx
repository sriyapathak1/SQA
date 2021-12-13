import React from "react";
// import { Box, Container, Typography, Button } from "@mui/material";
import { Box, Container, Typography } from "@stack-ui/components";

import HomeWrapper from "./styled";
// import Imgbanner from "../assets/images/img-bnr-2.png";
import ImgBanner from "../assets/img/img-bnr.png";
import { SidebarNav } from "../components";
import UserQuest from "./userQuest";

const Home = () => {
  return (
    <HomeWrapper>
      <Box className="mainContent">
        <Box className="side_tab_wrap">
          <SidebarNav />
          <UserQuest />
        </Box>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
