import React, { memo, Fragment } from "react";
import styled from "styled-components";

const Footer = memo(({ onLogout }) => {
  return (
    <FooterBox>
      <FooterText>
        {onLogout && (
          <Fragment>
            <Icon src="/images/movie.png" alt="icon" />
            <a href="https://github.com/hye-ss929/Movie-Collection">
              <Icon src="/images/github.png" alt="Github" />
            </a>
          </Fragment>
        )}
      </FooterText>
    </FooterBox>
  );
});

export default Footer;

const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.mainYellow};
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 60px;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;

  @media ${(props) => props.theme.mobile} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
