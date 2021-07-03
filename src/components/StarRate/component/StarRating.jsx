import React from "react";

const StarRating = ({ star, i }) => {
  return star > i ? (
    star - i === 0.5 ? (
      <img src="/images/halfstar.png" alt="halfstar" />
    ) : (
      <img src="/images/star.png" alt="star" />
    )
  ) : (
    <img src="/images/emptystar.png" alt="emptystar" />
  );
};

export default StarRating;
