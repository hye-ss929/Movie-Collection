import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <img src="/images/movie.png" alt="logo" />
      <p>Movie Collection Card</p>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  /* display: flex; */
  text-align: center;

  width: 100%;
  background-color: pink;
  padding: 0.5rem;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
