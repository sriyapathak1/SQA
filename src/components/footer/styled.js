import styled from "styled-components";

const FooterWrap = styled.div`
 

.footer-content{
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 15px;
    border-top: 1px solid #F5F6F6;
    border-bottom: 1px solid #F5F6F6;
    // margin-top: 24px;
}

.img-para{
  
    display: flex;
    
}
.success-logo{
    padding: 15px;
    
}
.para-1{
    width: 420px;
    text-align: left;
    color: #646263;
    margin: 12px 0;
}
ul{
    margin-top: 18px;
    padding: 0;
}
li{
    margin-bottom: 15px;
    list-style: none;
    color: #646263;
}
.icons{
    display: flex;
    margin-top: 25px;
}
.icons li{
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    color: white;
    background-color: #4A74F5;
    margin-right: 5px;
}
.fa-wifi{
    transform: rotate(50deg);
}
.fa-facebook{
    padding:0 5px;
}
p{
    margin-top: 24px;
    color: #C6B9C0;
    text-align: center;
}



`;

export default FooterWrap;