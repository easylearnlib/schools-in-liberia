import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  showNav?: boolean;
  showSideImage?: boolean;
  schoolName?: string;
};

export default function Layout({
  children,
  showNav,
  showSideImage,
  schoolName,
}: LayoutProps) {
  return showSideImage ? (
    <MainLayoutBoxWithSideImage>
      <NavBar showNav={showNav} />
      <Main>{children}</Main>
    </MainLayoutBoxWithSideImage>
  ) : (
    <MainLayoutBox>
      <NavBar showNav={showNav} schoolName={schoolName} />
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
  min-height: 100vh;
`;
const MainLayoutBoxWithSideImage = styled(MainLayoutBox)`
  background-image: url("/bkg.webp");
  background-repeat: repeat-y;
  background-size: contain;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
`;
