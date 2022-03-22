import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Text>Powered by Smart chance</Text>
      <Text>Cell No. 23188625272</Text>
      <Text>Email: jabateh.ansu@yahoo.com</Text>
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
  color: rgba(0, 46, 162, 1);
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
