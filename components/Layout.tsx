import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MainLayoutBox>
      <Main>{children}</Main>
    </MainLayoutBox>
  );
}

const MainLayoutBox = styled.div`
  display: flex;
  justify-conternt: center;
  align-items: center;
  margin: 0rem auto;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  text-align: center;
  margin: 0 auto;
`;
