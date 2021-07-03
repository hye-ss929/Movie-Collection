import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AddMovie from "./component/AddMovie";
import Preview from "./component/Preview";
import Button from "../../components/Button/Button";

const Collection = ({ authService }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [star, setStar] = useState(0);
  const handleChangeStar = (state) => setStar(state);
  const [movies, setMovise] = useState([
    {
      id: 1,
      name: "킬러의 보디가드2",
      country: "미국",
      genre: "액션",
      star: 4,
      review: "재밌어요!",
      fileName: "killer",
      fileURL: "bodyguard.jpeg",
    },
    {
      id: 2,
      name: "해리포터와 죽음의 성물 - 2부",
      country: "영국",
      genre: "판타지",
      star: 5,
      review: "재밌어요!",
      fileName: "harry",
      fileURL: "harry.jpeg",
    },
    {
      id: 3,
      name: "트와일라잇 - 브레이킹던",
      country: "미국",
      genre: "판타지",
      star: 4,
      review: "재밌어요!",
      fileName: "Twilight",
      fileURL: "breaking.jpeg",
    },
    {
      id: 4,
      name: "클루엘라",
      country: "미국",
      genre: "판타지",
      star: 4,
      review:
        "오늘이블챌 마지막날이네돈을 줄지 안줄지는 모르겠다모의고사를 봤는데어제 긴장된다고 했잖음 그래서 2시에 자버렸는데전과목이 터져버렸는데내인생은 어떡하죠하지만 항상 할수 있을것만 같음할수있음그리고 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 .. 음 크루엘라를 봤음 ..",
      fileName: "Twilight",
      fileURL: "cruella.jpeg",
    },
    {
      id: 5,
      name: "블랙위도우",
      country: "미국",
      genre: "판타지",
      star: 4,
      review: "재밌어요!",
      fileName: "Twilight",
      fileURL: "black.jpeg",
    },
  ]);
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && history.push("/");
    });
  });

  return (
    <CollectionBox>
      <Header onLogout={onLogout} />
      <MoviesBox>
        {/* <AddButton onClick={() => setClick(!click)}>추가하기</AddButton> */}
        <Button name="추가하기" onClick={() => setClick(!click)} />
        {click && (
          <AddMovie
            handleChangeStar={handleChangeStar}
            star={star}
            movies={movies}
          />
        )}
        <Preview movies={movies} />
      </MoviesBox>
      <Footer />
    </CollectionBox>
  );
};

export default Collection;

const CollectionBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MoviesBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 5% 3%;
`;

const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
`;
