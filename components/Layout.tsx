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

const MainLayoutBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem auto;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  min-height: 100vh;
`;
