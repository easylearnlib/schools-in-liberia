import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Grid } from "@mui/material";
import Link from "next/link";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return (
    <Wrapper container>
      <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />
      <Container xs={12} lg={6}>
        <Head>
          <Title>{school.schoolName}</Title>
          <SubTitle>
            {school.district} District - {school.county} County
          </SubTitle>
          <SubTitle>Liberia</SubTitle>
          <Link href={"/"} passHref>
            <Anchor>Return to home page</Anchor>
          </Link>
        </Head>
        <Body>
          Emis Number
          <Value>{school.emisNumber}</Value>
          School Type
          <Value>{school.schoolType}</Value>
          Senior High Division
          <Value>{school.shsSchool ? "Yes" : "None"}</Value>
          Junior High Division
          <Value>{school.jhsSchool ? "Yes" : "None"}</Value>
          Primary Division
          <Value>{school.primarySchool ? "Yes" : "None"}</Value>
          ABE School
          <Value>{school.abeSchool ? "Yes" : "None"}</Value>
          ALP School
          <Value>{school.alpSchool ? "Yes" : "None"}</Value>
          ECE School
          <Value>{school.eceSchool ? "Yes" : "None"}</Value>
          TVET School
          <Value>{school.tvetSchool ? "Yes" : "None"}</Value>
        </Body>
      </Container>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = data.map((obj) => ({
    params: {
      name: `${slugify(obj.schoolName)}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const school = data.find(
    (obj) => params.name === `${slugify(obj.schoolName)}`
  );
  return {
    props: { school },
  };
}

const Container = styled(Grid)`
  box-shadow: 5px 10px 18px #888888;
  margin-bottom: 2rem;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Value = styled(SubTitle)`
  color: rgba(0, 46, 162, 1);
`;

const Wrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;
const Body = styled(Grid)`
  align-text: left;
  font-weight: 700;
  padding: 1rem 0rem;
`;

const Head = styled(Grid)`
  padding: 2rem 0;
  border-bottom: 1px solid black;
  background: rgba(0, 46, 162, 1);
  color: #fff;
`;

const Anchor = styled.a`
  cursor: pointer;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 0.9rem;
  background: #fff;
  color: rgba(0, 46, 162, 1);
  font-weight: 700;

  &:visited {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default SchoolDetails;
