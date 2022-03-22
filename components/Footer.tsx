import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Text>+2318862527/ jabateh.ansu@yahoo.com</Text>
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
  margin-top: 1rem;
  font-size: 1rem;
`;
