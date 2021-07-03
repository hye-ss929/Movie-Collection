import React, { useState } from "react";
import StarRating from "./component/StarRating";
import styled from "styled-components";

const MAX_STAR = 5;

const StarRate = ({ onChange, star, none }) => {
  const [showStar, setShowStar] = useState(star);

  const calculateStar = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const value = width / MAX_STAR / 2;
    return (Math.floor(x / value) + 1) / 2;
  };

  const handleMouseMove = (e) => {
    setShowStar(calculateStar(e));
  };
  return (
    <StarRateBox
      onMouseMove={handleMouseMove}
      onClick={() => onChange(showStar)}
      onMouseLeave={() => setShowStar(star)}
      none={none}
    >
      {[...Array(MAX_STAR)].map((_, i) => (
        <StarRating key={i} star={showStar} i={i} />
      ))}
    </StarRateBox>
  );
};

export default StarRate;

const StarRateBox = styled.section`
  width: fit-content;
  margin-bottom: 10px;
  pointer-events: ${(props) => props.none};
`;
