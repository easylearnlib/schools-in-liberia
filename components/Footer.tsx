import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper>
      <Text>+231777298772</Text>
      <Text>smrtchance@gmail.com/nouhanjabateh@gmail.com</Text>
      <Text>
        powered by
        <Link passHref href={"https://smartchance.co"}>
          <Anchor target="_blank">SmartChance</Anchor>
        </Link>
      </Text>
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
  font-size: 0.8rem;
`;

const Anchor = styled.a`
  color: #01579b;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
