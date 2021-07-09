import React, { useState } from "react";
import PhotoTiket from "./PhotoTiket";
import MovieDetail from "./MovieDetail";
import styled from "styled-components";

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
  background-color: ${(props) => props.theme.basicWhite};
  border-radius: 8px;
  text-align: center;

  @media ${(props) => props.theme.mobile} {
    margin: 10% 3%;
  }
`;
