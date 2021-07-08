import React, { useState } from "react";
import PhotoTiket from "./PhotoTiket";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";

const MovieCard = ({ movie, deleteMovie }) => {
  const { id, name, country, genre, star, review, fileURL } = movie;
  const [movieClick, setMovieClick] = useState(false);

  const onSetIsVisible = (active) => {
    setMovieClick(active);
  };

  return (
    <MovieCardBox
      onMouseEnter={() => onSetIsVisible(true)}
      onMouseLeave={() => setMovieClick(false)}
    >
      <PhotoTiket fileURL={fileURL} movieClick={movieClick} />
      {movieClick && (
        <MovieDetail
          id={id}
          name={name}
          country={country}
          genre={genre}
          star={star}
          review={review}
          movie={movie}
          deleteMovie={deleteMovie}
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
  margin: 0 3% 5% 0;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
`;
