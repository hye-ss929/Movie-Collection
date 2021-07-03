import React, { useState } from "react";
import PhotoTiket from "./PhotoTiket";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";

const MovieCard = ({
  id,
  name,
  country,
  genre,
  star,
  review,
  fileName,
  fileURL,
}) => {
  const [movieClick, setMovieClick] = useState(false);

  return (
    <MovieCardBox
      key={id}
      onMouseEnter={() => setMovieClick(!movieClick)}
      onMouseLeave={() => setMovieClick(!movieClick)}
    >
      <PhotoTiket fileURL={fileURL} movieClick={movieClick} />

      {movieClick && (
        <MovieDetail
          name={name}
          country={country}
          genre={genre}
          star={star}
          review={review}
        />
      )}
    </MovieCardBox>
  );
};

export default MovieCard;

const MovieCardBox = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  margin: 0 0 5% 0;
  border: 1px solid blue;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
`;
