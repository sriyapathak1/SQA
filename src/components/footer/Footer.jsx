import React from "react";
// import { Box } from '@mui/material';
import {Box, Typography} from "@stack-ui/components";
import ImgLogo from "../../assets/images/logo.png";

// logo.png";
import FooterWrap from './styled';

const Footer = () => {
  return (

    <FooterWrap>

      <Box className="footer-content">
        <div class="img-para">
          <div class="success-logo">
            <img src={ImgLogo} alt="successive-logo" />
          </div>
          <Typography as="p" color="grey" className="para-1">SQA is a social questions & Answers Engine which will help you establish your community and connect with other people.
          </Typography>
        </div>
        <div class="about-us">
          <h4>About Us</h4>
            <ul>
              <li>Meet The Team</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
        </div>
        <div class="legal-stuff">
          <h4>Legal Stuff</h4>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
        </div>
        <div class="help">
          <h4>Help</h4>
            <ul>
              <li>Knowladge Base</li>
              <li>Support</li>
            </ul>
        </div>
        <div class="follow">
          <h4>Follow</h4>
          <div class="icons">
            <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
            <li><i class="fa fa-wifi" aria-hidden="true"></i></li>
          </div>
        </div>
      </Box>

      <p>2020@ copy right</p>
      <p class="m-0 text-center text-white">
        Copyright &copy; Your Website 2020
      </p>
    </FooterWrap>
  );
}

export default Footer;
