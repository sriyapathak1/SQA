import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Typography } from "@stack-ui/components";

// import

import NavWrapper from "./styled";
import ImgLogo from "../../assets/images/logo.png";



const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <NavWrapper className="navWrapper">
        <Container className="containe_wrapper">
          <NavLink className="navbar-brand" to="/">
            <img src={ImgLogo} alt="logo" />
            <a href="" className="logo">SQA</a>
            {/* <Avatar alt="Remy Sharp" src={ImgLogo} /> */}
            {/* Menu list */}
          </NavLink>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
                {/* <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/blog">
                {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
              </NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link nav-btn" to="/register">
              <button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Sign In/ Sign Up
              </button>
              
            </NavLink>
          </li> */}
          </ul>
        </Container>
      </NavWrapper>
    </React.Fragment>
  );
};

export default Navigation;
