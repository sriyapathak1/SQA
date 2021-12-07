import React from "react";
// import { Box } from '@mui/material';
import {Box, Button} from "@stack-ui/components";


const Footer = () => {
  return (
    <Box
    sx={{
      backgroundColor: 'primary.dark',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      padding: '12px',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
  <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>

      </Box> 
  );
}

export default Footer;
