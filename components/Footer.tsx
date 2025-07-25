import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    background: #eee;
    font-size: 1rem;
    color: #000000;

    margin-top: auto;
    padding: 2rem 0.5rem;
`;


const Anchor = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  color: #0062fe;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0.2rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
        powered by
        <Link passHref href="https://smartchance.org">
          <Anchor target="_blank" rel="noopener noreferrer">SmartChance</Anchor>
        </Link>
    </Wrapper>
  );
}
