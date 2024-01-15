import React from "react";

import styled from "styled-components";
import UserWrapper from "../../../StyledComponents/HomeStyle/Section3/UserWrapper";
import { useNavigate } from "react-router-dom";

const NoUserCp = () => {
  const navigate = useNavigate();
  return (
    <UserWrapper>
      <LoginWrapper
        onClick={() => {
          navigate("/login");
        }}
      >
        <LoginText>로그인</LoginText>
      </LoginWrapper>
      <SignUpWrapper
        onClick={() => {
          navigate("/join");
        }}
      >
        <SignUpText>회원가입</SignUpText>
      </SignUpWrapper>
    </UserWrapper>
  );
};

export default NoUserCp;

const LoginWrapper = styled.div`
  width: 140px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #f7dd07;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SignUpWrapper = styled.div`
  width: 140px;
  height: 40px;
  background-color: black;
  color: #f7dd07;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LoginText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const SignUpText = styled.div`
  color: #f7dd07;
  color: white;
  font-size: 14px;
  font-weight: 900;
`;
