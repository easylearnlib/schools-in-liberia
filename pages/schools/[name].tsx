import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Grid } from "@mui/material";

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
        </Head>
        <Body>
          Emis Number
          <SubTitle>{school.emisNumber}</SubTitle>
          School Type
          <SubTitle>{school.schoolType}</SubTitle>
          Senior High School
          <SubTitle>{school.shsSchool.toString().toUpperCase()}</SubTitle>
          Junior High School
          <SubTitle>{school.jhsSchool.toString().toUpperCase()}</SubTitle>
          Primary School
          <SubTitle>{school.primarySchool.toString().toUpperCase()}</SubTitle>
          ABE School
          <SubTitle>
            {school?.abeSchool && school.abeSchool.toString().toUpperCase()}
          </SubTitle>
          ALP School
          <SubTitle>
            {school.alpSchool && school.alpSchool.toString().toUpperCase()}
          </SubTitle>
          ECE School
          <SubTitle>
            {school.eceSchool && school.eceSchool.toString().toUpperCase()}
          </SubTitle>
          TVET School
          <SubTitle>
            {school.tvetSchool && school.tvetSchool.toString().toUpperCase()}
          </SubTitle>
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
  display: flex;
  flex-direction: column;
  box-shadow: 5px 10px 18px #888888;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: rgba(0, 46, 162, 1);
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
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
`;

const Head = styled(Grid)`
  margin: 2rem 0;
  border-bottom: 1px solid black;
`;

export default SchoolDetails;
