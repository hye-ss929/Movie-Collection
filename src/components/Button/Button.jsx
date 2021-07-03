import React from "react";
import styled from "styled-components";

const Button = ({
  onClick,
  name,
  top,
  bottom,
  width,
  height,
  color,
  right,
}) => {
  return (
    <ButtonBox
      onClick={onClick}
      bottom={bottom}
      top={top}
      width={width}
      height={height}
      color={color}
      right={right}
    >
      {name}
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right || 0}px;
  bottom: ${(props) => props.bottom}px;
  width: ${(props) => props.width || 10}%;
  height: ${(props) => props.height || 40}px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
`;
