import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";

export default function Footer() {
  return (
    <Wrapper>
      <Text>+231777298772</Text>
      <Text>nouhanjabateh@gmail.com</Text>
      <Text>powered by Shine Liberia</Text>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  display: flex;
  max-width: 60rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  width: 100%;
  border-top: 1px solid #ccc;
  padding-bottom: 2rem;
`;

const Text = styled.p`
  &: first-of-type {
    margin-top: 2rem;
  }
  margin: 0;
  font-size: 1.2rem;
`;
