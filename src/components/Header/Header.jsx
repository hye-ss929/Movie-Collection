import React from "react";
import styled from "styled-components";

const Header = ({ onLogout }) => {
  return (
    <HeaderBox>
      {onLogout && <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>}
      <img src="/images/movie.png" alt="logo" />
      <p>Movie Collection Card</p>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  position: relative;
  width: 100%;
  background-color: #fddf46;
  padding: 0.5rem;
  text-align: center;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  background-color: #ff4676;
`;
