import React, { useRef } from "react";
import Button from "../../../components/Button/Button";
import StarRate from "../../../components/StarRate/StarRate";
import AddFile from "./AddFile";
import { COUNTRY, GENRE } from "../MAPPING_OBJ";
import styled from "styled-components";

const AddMovieModal = ({ onChange, star, addMovieCard, setClick, setStar }) => {
  const titleRef = useRef();
  const countryRef = useRef();
  const genreRef = useRef();
  const textRef = useRef();

  const onSubmit = () => {
    const movie = {
      id: Date.now(),
      name: titleRef.current.value,
      country: countryRef.current.value,
      genre: genreRef.current.value,
      star: star,
      review: textRef.current.value,
      fileName: "",
      fileURL: "",
    };
    addMovieCard(movie);
    setClick(false);
    setStar(0);
  };

  return (
    <AddMovieBox>
      <Title>☀️ 영화기록하기 ☀️</Title>
      <Close
        src="/images/error.png"
        alt="close"
        onClick={() => setClick(false)}
      />
      <InputBox>
        <InputName>✏️ 제목</InputName>
        <Input type="text" name="name" ref={titleRef} />
        <InputName>✏️ 국가</InputName>
        <SelectBox name="country" ref={countryRef}>
          {COUNTRY.map((country) => (
            <option key={country.id}>{country.name}</option>
          ))}
        </SelectBox>
        <InputName>✏️ 장르</InputName>
        <SelectBox name="genre" ref={genreRef}>
          {GENRE.map((genre) => (
            <option key={genre.id} onChange={genre.name}>
              {genre.name}
            </option>
          ))}
        </SelectBox>
        <InputName>✏️ 평점</InputName>
        <StarRate onChange={onChange} star={star} />
        <InputName>✏️ 세줄 후기</InputName>
        <Textarea id="review" name="review" ref={textRef} />
        <InputName>🏷 포스터</InputName>
        <AddFile />
        <Button
          name="등록하기"
          onClick={onSubmit}
          bottom="0"
          width="100"
          height="50"
          color="#ff4676"
          setClick={setClick}
          type="submit"
        />
      </InputBox>
    </AddMovieBox>
  );
};

export default AddMovieModal;

const AddMovieBox = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 1;
`;

const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
`;

const InputBox = styled.div`
  padding: 15px;
`;

const InputName = styled.p`
  padding-bottom: 5px;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  padding: 10px;
`;
