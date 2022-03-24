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
    <>
      <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />
      <Container>
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
        <Body container direction={"column"}>
          <Info>Description</Info>
          <Row container item>
            <Column item xs={4}>
              EMIS Number
              <Value>{school.emisNumber}</Value>
              School Type
              <Value>{school.schoolType}</Value>
            </Column>
            <Column item xs={4}>
              Contact Number
              <Value>N/A</Value>
              Email Address
              <Value>N/A</Value>
            </Column>
            <Column item xs={4}>
              Address
              <Value>N/A</Value>
              Website
              <Value>N/A</Value>
            </Column>
          </Row>
          <Info>Additional Info</Info>
          <Row container item>
            <Column item xs={4}>
              Senior High Division
              <Value>{school.shsSchool ? "Yes" : "None"}</Value>
              TVET School
              <Value>{school.tvetSchool ? "Yes" : "None"}</Value>
              ABE School
              <Value>{school.abeSchool ? "Yes" : "None"}</Value>
            </Column>
            <Column item xs={4}>
              Junior High Division
              <Value>{school.jhsSchool ? "Yes" : "None"}</Value>
              ALP School
              <Value>{school.alpSchool ? "Yes" : "None"}</Value>
            </Column>
            <Column item xs={4}>
              Elementary Division
              <Value>{school.primarySchool ? "Yes" : "None"}</Value>
              ECE School
              <Value>{school.eceSchool ? "Yes" : "None"}</Value>
            </Column>
          </Row>
          <Info>Facilities</Info>
          <Row container item>
            <Column item xs={4}>
              Computer Lab
              <Value>N/A</Value>
            </Column>
            <Column item xs={4}>
              Gymnasium
              <Value>N/A</Value>
            </Column>
            <Column item xs={4}>
              Laboratory
              <Value>N/A</Value>
            </Column>
          </Row>
          <Info>Ratings</Info>
          <Row container item>
            <Column item xs={4}>
              MOE
              <Value>N/A</Value>
              Football
              <Value>N/A</Value>
            </Column>
            <Column item xs={4}>
              WAEC performance
              <Value>N/A</Value>
              Basketball
              <Value>N/A</Value>
            </Column>
            <Column item xs={4}>
              Kickball
              <Value>N/A</Value>
              Public
              <Value>N/A</Value>
            </Column>
          </Row>
        </Body>
      </Container>
    </>
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

const Container = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  height: 100%;
  box-shadow: 5px 10px 18px #888888;
  padding-bottom: 2rem;
  margin: 0 auto;
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
  margin: 0;
  font-size: 1rem;
`;

const Body = styled(Grid)`
  align-text: left;
  font-weight: 700;
  padding: 2rem;
  height: 100%;
  margin: 0 auto;
  font-size: 1rem;
`;

const Head = styled(Grid)`
  padding: 2rem 0;
  background: #002368;
  color: #fff;
  text-align: center;
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

const Column = styled(Grid)`
  padding-left: 1rem;
`;
const Row = styled(Grid)`
  padding: 1rem 0rem;
  margin: 0;
  border: 2px solid black;
`;

const Info = styled("h1")`
  border: 1px solid #002368;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1rem;
  background: #002368;
  color: #fff;
  font-weight: 700;
  margin: 0;
`;

export default SchoolDetails;
