import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MainLayoutBox>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </MainLayoutBox>
  );
}

const MainLayoutBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem auto;
  background: #f3f2ef;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 100vh;
`;
