import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import Layout from "../../components/Layout";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return (
    <Layout showNav={true} showSideImage={false} schoolName={school.schoolName}>
      <Wrapper>
        <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />
        <Container>
          <HeroSlice>
            <Image
              alt={""}
              src={
                "https://images.unsplash.com/photo-1632215863479-201029d93143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
              }
            />
          </HeroSlice>
        </Container>
        <Container>
          <Paper>
            <Head>
              <Title>{school.schoolName}</Title>
              <SubTitle>
                {school.district} District - {school.county} County
              </SubTitle>
              <SubTitle>Liberia</SubTitle>
            </Head>
          </Paper>
        </Container>
        <Container>
          <Paper>
            <Head>
              <Title>Coming soon... In development</Title>
            </Head>
          </Paper>
        </Container>
      </Wrapper>
    </Layout>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const Head = styled(Grid)`
  padding: 1rem 0;
  background: #01579b;
  color: #fff;
  text-align: center;
`;

const HeroSlice = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled("img")`
  height: 100%;
  width: 100%;
`;

export default SchoolDetails;
