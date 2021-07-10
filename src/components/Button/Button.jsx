import React, { memo } from "react";
import styled from "styled-components";

const Button = memo(
  ({
    onClick,
    name,
    top,
    bottom,
    width,
    height,
    color,
    right,
    left,
    marginBottom,
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
        left={left}
        marginBottom={marginBottom}
      >
        {name}
      </ButtonBox>
    );
  }
);
export default Button;

const ButtonBox = styled.button`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left} px;
  right: ${(props) => props.right || 0}px;
  bottom: ${(props) => props.bottom}px;
  width: ${(props) => props.width || 10}%;
  height: ${(props) => props.height || 40}px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  font-weight: bold;
  color: ${(props) => props.theme.basicWhite};
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    width: ${(props) => props.width}%;
  }
  @media ${(props) => props.theme.laptop} {
    width: ${(props) => props.width}%;
  }
  @media ${(props) => props.theme.mobile} {
    width: ${(props) => props.width}%;
  }
  @media ${(props) => props.theme.mobileS} {
    width: ${(props) => props.width}%;
  }
`;
