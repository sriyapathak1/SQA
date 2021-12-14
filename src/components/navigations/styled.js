import styled from "styled-components";

const NavWrapper = styled.div`
  padding: 0 13px;
  margin-left: -15px;
    margin-right: -15px;
    border-bottom: 1px solid #d2cfcf;
    background: linear-gradient(
      -90deg, rgb(0, 89, 178), rgb(0, 127, 255) 120%);
.containe_wrapper{
  max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.nav-link {
  
  color: rgb(255, 255, 255);
}

  .navbar-brand {
    display: flex;
    align-items: center;
  }
  .logo{
    background-color: #e74c23;
    background-image: linear-gradient(
45deg, #f1a30b, #58c1ec);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 36px;
    font-weight: 500;
  }
  img{
    width: 32px;
  }
  li.nav-item {
    padding: 3px 20px;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .nav-link {
    // color: white;
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
