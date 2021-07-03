import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Preview = ({ movies, click }) => {
  console.log(movies);
  return (
    <PreviewBox>
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          name={movie.name}
          country={movie.country}
          genre={movie.genre}
          star={movie.star}
          review={movie.review}
          fileName={movie.fileName}
          fileURL={movie.fileURL}
          click={click}
        />
      ))}
    </PreviewBox>
  );
};

export default Preview;

const PreviewBox = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid red;
`;
