import styled from "styled-components";
// import img from '../assets/img/';

const HomeWrapper = styled.div`
  .bannr img {
    width: 100%;
  }
  // padding: 30px 0 10px;
  // background-image: url('../assets/img/img-bnr-2.png');
  //   background-size: cover;
  //   background-position: center;
  //   height: 80vh;
  .homeWrapper {
    // position: absolute;
    // top: 46px;
    // left: 16%;
  }
  h2 {
    font-weight: 300;
    font-size: 50px;
    text-transform: uppercase;
  }
  p {
    padding: 0 90px;
    color: #717070;
  }
  .custom_btn {
    text-align: center;
  }

  .mainContent{
    margin-left: -15px;
    margin-right: -15px;
    background-color: #f2f2f2;
  }

  .side_tab_wrap{
    max-width: 1280px;
    margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0 15px;
  }
`;

export default HomeWrapper;
