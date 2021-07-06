import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <FooterText>
        <Icon src="/images/movie.png" alt="icon" />
      </FooterText>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  width: 100%;
  background-color: #fddf46;
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const Icon = styled.img`
  width: 38px;
  height: 38px;
`;
