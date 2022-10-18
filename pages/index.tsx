import styled from "styled-components";
import React from "react";
import { Button, Typography } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { styled as muiStyled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <ImageWrapper>
          <Image
            src={
              "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1765&q=80"
            }
          />
          <Center>
            <Header variant={"h1"}>Welcome to EDU-LIBERIA</Header>
            <StyledButton variant="contained" href={"/search"}>
              GET STARTED
            </StyledButton>
          </Center>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper>
          <Image
            src={
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
            }
          />
          <Center>
            <Header variant={"h1"}>Welcome to EDU-LIBERIA</Header>
            <StyledButton variant="contained" href={"/search"}>
              GET STARTED
            </StyledButton>
          </Center>
        </ImageWrapper>
      </SwiperSlide>
    </Swiper>
  );
}

const Wrapper = styled.div`
  margin: 0.5rem 0;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const StyledButton = muiStyled(Button)`
  width: 8rem;
  height: 2.5rem;
`;

const Center = muiStyled("div")`
  position: absolute;
  top: 60%;
  left: 35%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Image = muiStyled("img")`

  width:100%;
  height: 100%;
`;

const Header = muiStyled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

export default Home;
