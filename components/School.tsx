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
      <SchoolGrid>
          <Card>
            <SchoolName>{school.schoolName}</SchoolName>
            <County>{school.county} — {school.district}</County>
            <p>Type: {school.schoolType}</p>
            <p>Rating: {school.rating || "N/A"}</p>
            <Link href={`/schools/${slugify(school.schoolName)}`} passHref>
              <ViewButton>View Details</ViewButton>
            </Link>
          </Card>
      </SchoolGrid>
  );
}



const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

const SchoolName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const County = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #444;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
`;