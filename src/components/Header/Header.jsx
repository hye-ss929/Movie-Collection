import React from "react";
import styled from "styled-components";

const Header = ({ onLogout }) => {
  return (
    <HeaderBox>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <img src="/images/movie.png" alt="logo" />
      <p>Movie Collection Card</p>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  text-align: center;

  width: 100%;
  background-color: #fddf46;
  padding: 0.5rem;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
