import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MainLayoutBox>
      <Main>
        {children}
        <Footer />
      </Main>
    </MainLayoutBox>
  );
}

const MainLayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-conternt: center;
  align-items: center;
  margin: 0rem auto;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  text-align: center;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
`;
