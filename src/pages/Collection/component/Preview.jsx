import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Preview = ({ movies, delefeModalOpen, deleteMovie }) => {
  return (
    <PreviewBox>
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          name={movie.name}
          country={movie.country}
          genre={movie.genre}
          star={movie.star}
          review={movie.review}
          fileName={movie.fileName}
          fileURL={movie.fileURL}
          delefeModalOpen={delefeModalOpen}
          deleteMovie={deleteMovie}
        />
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
