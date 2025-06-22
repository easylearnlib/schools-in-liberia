import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
import Link from "next/link";

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const Text = styled.p`
  margin: 0.25rem 0;
  font-size: 0.85rem;
  text-align: center;

  &:first-of-type {
    margin-top: 1rem;
  }
`;

const Anchor = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  color: #01579b;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Wrapper elevation={0}>
      <Text>
        <Anchor href="tel:+231777298772">+231 777 298 772</Anchor>
      </Text>
      <Text>
        <Anchor href="mailto:admin@smartchance.org">admin@smartchance.org</Anchor>
      </Text>
      <Text>
        Powered by
        <Link passHref href="https://smartchance.org">
          <Anchor target="_blank" rel="noopener noreferrer">SmartChance</Anchor>
        </Link>
      </Text>
    </Wrapper>
  );
}
