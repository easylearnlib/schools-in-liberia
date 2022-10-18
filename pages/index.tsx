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
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <ImageWrapper>
          <Center>
            <Header variant={"h2"}>Welcome to EDU-LIBERIA</Header>
            <StyledButton variant="contained" href={"/search"}>
              GET STARTED
            </StyledButton>
          </Center>
        </ImageWrapper>
      </SwiperSlide>
    </Swiper>
  );
}

const ImageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80");
  background-size: fill;
`;

const StyledButton = muiStyled(Button)`
  width: 8rem;
  height: 2.5rem;
`;

const Center = muiStyled("div")`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Header = muiStyled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;


`;

export default Home;
