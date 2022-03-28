import * as React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
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
          <Link href={`/schools/${slugify(school.schoolName)}`} passHref>
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
  border-bottom: 1px solid #ccc;
  padding: 2rem;
`;

const Head = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const Label = styled(Typography)`
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
