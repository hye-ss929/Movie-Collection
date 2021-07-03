import React from "react";
import styled from "styled-components";

const PhotoTiket = ({ fileURL, movieClick }) => {
  return (
    <PhotoBox>
      <Photo src={`/images/${fileURL}`} movieClick={movieClick && "none"} />
    </PhotoBox>
  );
};

export default PhotoTiket;

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Photo = styled.img`
  display: ${(props) => props.movieClick};
  width: 90%;
  height: 90%;
  border-radius: 8px;
`;
