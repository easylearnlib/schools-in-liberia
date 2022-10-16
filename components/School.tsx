import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import { SchoolsInput } from "../models";
import Link from "next/link";
import { slugify } from "../utilities";

type Props = {
  school: SchoolsInput;
};

export default function School(props: Props) {
  const { school } = props;

  return (
    <Wrapper sx={{ px: { xs: "1rem", md: "4rem" } }}>
      <Container>
        <Head>{school.emisNumber}</Head>
        <Head>
          <Link href={`/school/${slugify(school.schoolName)}`} passHref>
            <Anchor>{school.schoolName}</Anchor>
          </Link>
        </Head>
        <Label>{school.schoolType}</Label>
        <Label>
          {school.district} - {school.county}
        </Label>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  width: 100%;
`;

const Container = styled(Box)`
  border-top: 1px solid #ccc;
  padding: 2rem;
`;

const Head = muiStyled(Typography)`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const Label = muiStyled(Typography)`
  margin: 0;
  font-size: 1rem;
`;

const Anchor = styled.a`
  color: #01579b;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
