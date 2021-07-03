import React from "react";
import styled from "styled-components";

const MovieDetail = ({ name, country, genre, star, review }) => {
  return (
    <MobieDetailBox>
      <MovieName>{name}</MovieName>
      <Tickets src="/images/movie-tickets.png" alt="tickets" />
      <TextBox>
        <Text>국가</Text>
        <p>{country}</p>
      </TextBox>
      <TextBox>
        <Text>장르</Text>
        <p>{genre}</p>
      </TextBox>
      <TextBox>
        <Text>별점</Text>
        <p>{star}</p>
      </TextBox>
      <TextReview>리뷰</TextReview>
      <ReviewBox>
        <p>{review}</p>
      </ReviewBox>
    </MobieDetailBox>
  );
};

export default MovieDetail;

const MobieDetailBox = styled.section`
  position: relative;
  width: 100%;
`;

const MovieName = styled.p`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  padding: 15px 0;
  font-weight: bold;
  font-size: 1.2rem;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

const Tickets = styled.img`
  position: absolute;
  top: 100px;
  right: 50px;
  width: 64px;
`;
const TextBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px 15px;
  overflow: hidden;
`;

const Text = styled.p`
  margin-right: 10px;
  font-size: 1rem;
  font-weight: bold;
`;

const TextReview = styled.p`
  margin-top: 10px;
  padding: 10px 15px 0 15px;
  text-align: left;
  font-weight: bold;
`;

const ReviewBox = styled.div`
  height: 120px;
  display: flex;
  margin-top: 10px;
  padding: 10px 15px;
  /* border: 1px solid red; */
  p {
    overflow: auto;
  }
`;
