import styled from "styled-components";
import React from "react";
import { Button, Typography } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { styled as muiStyled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Page = styled.div`
  background-color: #ffffff;
  color: #0d47a1;
  font-family: "Segoe UI", sans-serif;
`;

const Hero = styled.section`
  background: linear-gradient(to right, #0d47a1, #1976d2);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #0d47a1;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e3f2fd;
  }
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #444;
`;


function Home() {
  return (
     <Page>
      <Head>
        <title>School Finder – Home</title>
      </Head>

      <Hero>
        <Headline>Welcome to School Finder</Headline>
        <Subheading>
          Discover and compare high schools across the country. Make informed
          decisions about your child’s future.
        </Subheading>
        <Link href="/schools" passHref>
          <CTAButton>Browse Schools</CTAButton>
        </Link>
      </Hero>

      <Features>
        <FeatureCard>
          <FeatureTitle>Browse Schools</FeatureTitle>
          <FeatureText>
            View a comprehensive list of schools with advanced filters and sorting.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Compare Performance</FeatureTitle>
          <FeatureText>
            Explore WAEC pass rates and student stats for better decision making.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>See Facilities</FeatureTitle>
          <FeatureText>
            Check what facilities are available at each institution before you apply.
          </FeatureText>
        </FeatureCard>
      </Features>

    </Page>
  );
}

export default Home;
