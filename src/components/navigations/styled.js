import styled from "styled-components";

const NavWrapper = styled.div`
  padding: 13px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  li.nav-item {
    padding: 3px 20px;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .nav-link {
    color: white;
    font-weight: 500;
  }
  .nav-link.nav-btn #basic-button {
    padding: 2px 10px;
    color: #1565c0;
    background: white;
  }
  .search{
    padding: 0;
}
`;

export default NavWrapper;
