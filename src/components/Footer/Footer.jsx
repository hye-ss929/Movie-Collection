import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <FooterText></FooterText>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  width: 100%;
  /* height: 15px; */
  background-color: #fddf46;
`;

const FooterText = styled.div`
  width: 100%;
  height: 50px;
`;
