import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";

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

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
  }

  @media ${(props) => props.theme.mobileS} {
    margin-top: 12%;
  }
`;
