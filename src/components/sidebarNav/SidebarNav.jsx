import React from 'react';
import { NavLink } from "react-router-dom";
import { Sidebar, Container } from "@stack-ui/components";
import SideNavWrapper from './styled';


const SidebarNav = () => {
  

  return (
    <React.Fragment>
      <SideNavWrapper>
      <Container className="sidenavmenu_list">
          {/* <NavLink className="navbar-brand" to="/">
          MEnu for
          </NavLink> */}

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addpost">
                Add Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/community">
                Communities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/questions">
                Questions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/polls">
                Polls
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/blog">
                Groups
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/blog">
                Tags
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/blog">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link search" to="/blog">
                Help
              </NavLink>
            </li>
          </ul>
        </Container>
        </SideNavWrapper>
    </React.Fragment>

  )} ;

export default SidebarNav;

