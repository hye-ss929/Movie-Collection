import React, { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const Login = memo(({ authService }) => {
  const histroy = useHistory();
  const goToCollection = (userId) => {
    histroy.push({
      pathname: "/collection",
      state: { id: userId },
    });
  };
  const onLogin = (e) => {
    authService
      .login(e.currentTarget.alt)
      .then((data) => goToCollection(data.user.uid));
  };

  const noUserGoToCollection = () => {
    authService.loginAnonymously();
  };
  useEffect(() => {
    authService.onAuthChange((user) => user && goToCollection(user.uid));
  });
  return (
    <LoginBox>
      <Header />
      <Loginsection>
        <p>간편로그인</p>
        <ImgBox>
          <LoginIcon
            onClick={onLogin}
            src="/images/google-icon.png"
            alt="Google"
          />
          <LoginIcon onClick={onLogin} src="/images/github.png" alt="Github" />
          <LoginIcon
            onClick={noUserGoToCollection}
            src="/images/user.png"
            alt="nonUser"
          />
        </ImgBox>
      </Loginsection>
      <Footer />
    </LoginBox>
  );
});
export default Login;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.basicWhite};
  @media ${(props) => props.theme.desktop} {
    width: 30%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 50%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 50%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobileS} {
    width: 90%;
  }
`;

const Loginsection = styled.section`
  width: 100%;
  height: 100%;

  p {
    padding: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;

const LoginIcon = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  @media ${(props) => props.theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;

  @media ${(props) => props.theme.mobile} {
    padding: 1rem 2rem;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 1rem;
  }
`;
