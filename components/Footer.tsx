import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Text>+231777298772</Text>
      <Text>nouhanjabateh@gmail.com</Text>
      <Text>powered by Shine Liberia</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  width: 100%;
`;

const Text = styled.p`
  &: first-of-type {
    margin-top: 2rem;
  }
  margin: 0;
  font-size: 1.2rem;
`;
