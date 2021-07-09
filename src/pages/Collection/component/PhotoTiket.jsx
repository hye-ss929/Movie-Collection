import React, { memo } from "react";
import styled from "styled-components";

const PhotoTiket = memo(({ fileURL, movieClick }) => {
  return (
    <PhotoBox>
      <Photo src={`${fileURL}`} movieClick={movieClick && "none"} />
    </PhotoBox>
  );
});

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
