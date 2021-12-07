import React from "react";
import { NavLink } from "react-router-dom";
import {Box, Container, Typography} from "@stack-ui/components";

// import { Box, Button, MenuItem, Menu } from "@mui/material";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import {Box, Button} from "@stack-ui/components";

import NavWrapper from "./styled";
import ImgLogo from "../../assets/images/s-logo.png";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

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
    <Box
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <NavWrapper className="navWrapper">
        <NavLink className="navbar-brand" to="/">
          <img src={ImgLogo} alt="logo" />
          {/* <Avatar alt="Remy Sharp" src={ImgLogo} /> */}
          {/* Menu list */}
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
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
          <li className="nav-item">
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
              {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu> */}
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
    </Box>
  );
};

export default Navigation;
