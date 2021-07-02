import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.alt).then(console.log);
  };
  return (
    <LoginBox>
      <Header />
      <Loginsection>
        <p>간편로그인</p>
        <ImgBox>
          <Google
            onClick={onLogin}
            src="/images/google-icon.png"
            alt="Google"
          />
          <Github onClick={onLogin} src="/images/github.png" alt="Github" />
        </ImgBox>
      </Loginsection>
      <Footer />
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  background-color: #fff;
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

const Google = styled.img`
  width: 64px;
  height: 64px;
`;

const Github = styled.img``;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 6rem;
`;
