import React from "react";
import StarRate from "../../../components/StarRate/StarRate";
import styled from "styled-components";

const MovieDetail = ({ name, country, genre, star, review, none }) => {
  return (
    <MobieDetailBox>
      <MovieName>{name}</MovieName>
      <TextBox>
        <Text>국가</Text>
        <p>{country}</p>
      </TextBox>
      <TextBox>
        <Text>장르</Text>
        <p>{genre}</p>
      </TextBox>
      <TextBox>
        <StarText>별점</StarText>
        <StarBox>
          <StarRate star={star} none={none} />
        </StarBox>
      </TextBox>
      <TextReview>세줄 리뷰</TextReview>
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
  margin: 20px 0 10px 0;
  padding: 15px 0;
  font-weight: bold;
  font-size: 1.2rem;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

const TextBox = styled.div`
  display: flex;
  height: fit-content;
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
  p {
    overflow: auto;
  }
`;

const StarText = styled.p`
  margin-top: 10px;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: bold;
`;

const StarBox = styled.div`
  pointer-events: none;
`;
