import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddMovieModal from "./component/AddMovieModal";
import Preview from "./component/Preview";
import Button from "../../components/Button/Button";
import styled from "styled-components";

const Collection = ({ imageUpload, authService, moviesDatabase }) => {
  const history = useHistory();
  const userId = history.location.state.id;
  const [click, setClick] = useState(false);
  const [star, setStar] = useState(0);
  const handleChangeStar = (state) => setStar(state);
  const [movies, setMovies] = useState({});

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    moviesDatabase.snapshotMovie(userId, (movies) => {
      setMovies(movies);
    });
  }, [moviesDatabase, userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && history.push("/");
    });
  }, [authService, history]);

  const addMovieCard = (movie) => {
    setMovies((movies) => {
      const update = { ...movies };
      update[movie.id] = movie;
      return update;
    });
    moviesDatabase.saveMovie(userId, movie);
  };

  const deleteMovie = (movie) => {
    setMovies((movies) => {
      const update = { ...movies };
      delete update[movie.id];
      return update;
    });
    moviesDatabase.removeMovie(userId, movie);
  };

  return (
    <CollectionBox>
      <Header onLogout={onLogout} />
      <MoviesBox>
        <Button
          name="추가하기"
          onClick={() => setClick(!click)}
          top="10"
          right="10"
          width="20"
          color="#ff4676"
        />
        {click && (
          <FullPage>
            <AddMovieModal
              imageUpload={imageUpload}
              onChange={handleChangeStar}
              star={star}
              movies={movies}
              addMovieCard={addMovieCard}
              setClick={setClick}
              setStar={setStar}
            />
          </FullPage>
        )}
        <Preview movies={movies} click={click} deleteMovie={deleteMovie} />
      </MoviesBox>
      <ScrollBox>
        <UpScroll
          onClick={() => window.scroll(0, 0)}
          src="/images/up-arrow.png"
          alt="up"
        />
      </ScrollBox>
      <Footer onLogout={onLogout} />
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
  padding: 5% 0 5% 3.5%;

  @media ${(props) => props.theme.mobileS} {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const FullPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10000;
`;

const UpScroll = styled.img`
  position: absolute;
  right: 20px;
  bottom: 30px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const ScrollBox = styled.div`
  position: relative;
  flex-direction: flex-end;
  @media ${(props) => props.theme.mobile} {
    margin: 10px;
  }
`;
