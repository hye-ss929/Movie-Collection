import React from "react";
import styled from "styled-components";

const Button = ({ onClick, name }) => {
  return <ButtonBox onClick={onClick}>{name}</ButtonBox>;
};

export default Button;

const ButtonBox = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
`;
