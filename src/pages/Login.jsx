import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginBox>
      <Header />
      <Loginsection>
        <p>간편로그인</p>
        <Google src="/images/google-icon.png" alt="google" />
        <Github src="/images/github.png" alt="github" />
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
  margin: 10% auto;
  background-color: #fff;
  border-radius: 8px;
`;

const Loginsection = styled.section`
  width: 100%;
  height: 100%;
`;

const Google = styled.img`
  width: 64px;
  height: 64px;
`;

const Github = styled.img``;
