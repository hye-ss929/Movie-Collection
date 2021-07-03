import React from "react";
import Button from "../../../components/Button/Button";
import StarRate from "../../../components/StarRate/StarRate";
import { COUNTRY, GENRE } from "../MAPPING_OBJ";
import styled from "styled-components";

const AddMovie = ({ handleChangeStar }) => {
  return (
    <AddMovieBox>
      <Title>영화기록하기</Title>
      <InputBox>
        <p>영화제목</p>
        <input type="text" />
        <p>영화국가</p>
        <select>
          {COUNTRY.map((country) => (
            <option key={country.id}>{country.name}</option>
          ))}
        </select>
        <p>영화장르</p>
        <select>
          {GENRE.map((genre) => (
            <option key={genre.id}>{genre.name}</option>
          ))}
        </select>
        <p>평점</p>
        <StarRate handleChangeStar={handleChangeStar} />
        <p>후기</p>
        <textarea />
        <p>포스터</p>
        <input type="text" />
        <Button />
      </InputBox>
    </AddMovieBox>
  );
};

export default AddMovie;

const AddMovieBox = styled.section`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 1;
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding-top: 10px;
  text-align: center;
`;

const InputBox = styled.div`
  border: 1px solid red;
`;
