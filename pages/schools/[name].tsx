import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return (
    <Wrapper>
      <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />
      <Nav>
        <Title>{school.schoolName}</Title>
        <SubTitle>
          {school.district} District - {school.county} County
        </SubTitle>
        <SubTitle>Liberia</SubTitle>
      </Nav>
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

const Nav = styled.nav`
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: rgba(0, 46, 162, 1);
  box-shadow: 5px 10px 18px #888888;
  padding: 1rem 0;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SchoolDetails;
