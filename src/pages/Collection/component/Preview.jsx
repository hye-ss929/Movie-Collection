import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Preview = ({ movies, deleteMovie }) => {
  return (
    <PreviewBox>
      {Object.keys(movies).map((key) => (
        <MovieCard key={key} movie={movies[key]} deleteMovie={deleteMovie} />
      ))}
    </PreviewBox>
  );
};

export default Preview;

const PreviewBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
