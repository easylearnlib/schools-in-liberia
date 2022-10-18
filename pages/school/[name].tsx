import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import { NextSeo } from "next-seo";
import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import { KeyboardEvent } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Layout from "../../components/Layout";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

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
              <Link href={"/"} passHref>
                <Anchor>Return to home page</Anchor>
              </Link>
            </Head>
          </Paper>

          <Paper sx={{ minHeight: "calc(100vh - 24rem)" }}>
            <Body
              container
              direction={"column"}
              sx={{ px: { xs: 0, sm: 1, md: 2, lg: 3 }, py: 3 }}
            >
              <Section label={"Main"}>
                <Item>
                  EMIS
                  <Value>{school.emisNumber}</Value>
                </Item>
                <Item>
                  School Type
                  <Value>{school.schoolType}</Value>
                </Item>
                <Item>
                  Phone
                  <Value>N/A</Value>
                </Item>

                <Item>
                  Email
                  <Value>N/A</Value>
                </Item>
                <Item>
                  Address
                  <Value>N/A</Value>
                </Item>
                <Item>
                  Website
                  <Value>N/A</Value>
                </Item>
              </Section>
              <Section label={"Extra"}>
                <Item>
                  Senior High
                  <Value>{school.shsSchool ? "Yes" : "None"}</Value>
                </Item>
                <Item>
                  TVET School
                  <Value>{school.tvetSchool ? "Yes" : "None"}</Value>
                </Item>
                <Item>
                  ABE School
                  <Value>{school.abeSchool ? "Yes" : "None"}</Value>
                </Item>

                <Item>
                  Junior High
                  <Value>{school.jhsSchool ? "Yes" : "None"}</Value>
                </Item>
                <Item>
                  ALP School
                  <Value>{school.alpSchool ? "Yes" : "None"}</Value>
                </Item>
                <Item>
                  Elementary
                  <Value>{school.primarySchool ? "Yes" : "None"}</Value>
                </Item>

                <Item>
                  ECE School
                  <Value>{school.eceSchool ? "Yes" : "None"}</Value>
                </Item>
              </Section>
              <Section label={"Facilities"}>
                <Item>
                  Computer Lab
                  <Value>N/A</Value>
                </Item>
                <Item>
                  Gymnasium
                  <Value>N/A</Value>
                </Item>
                <Item>
                  Laboratory
                  <Value>N/A</Value>
                </Item>
              </Section>
              <Section label={"Ratings"}>
                <Item>
                  MOE
                  <Value>N/A</Value>
                </Item>

                <Item>
                  Public
                  <Value>N/A</Value>
                </Item>
                <Item>
                  WAEC
                  <Value>N/A</Value>
                </Item>

                <Item>
                  Basketball
                  <Value>N/A</Value>
                </Item>

                <Item>
                  Kickball
                  <Value>N/A</Value>
                </Item>
                <Item>
                  Football
                  <Value>N/A</Value>
                </Item>
              </Section>
            </Body>
          </Paper>
        </Container>
      </Wrapper>
    </Layout>
  );
}

type SectionProps = {
  label: string;
  children: React.ReactNode;
};

function Section(props: SectionProps) {
  const { label, children } = props;

  const AccordionSummary = muiStyled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
  }));

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={label}
        id={label}
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Row item>{children}</Row>
      </AccordionDetails>
    </Accordion>
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

const Value = styled(SubTitle)`
  color: #01579b;
  margin: 0;
  font-size: 1rem;
`;

const Body = styled(Grid)`
  align-text: left;
  height: 100%;
  margin: 0 auto;
  font-size: 1rem;
  max-width: 60rem;
`;

const Head = styled(Grid)`
  padding: 1rem 0;
  background: #01579b;
  color: #fff;
  text-align: center;
`;

const Anchor = styled.a`
  cursor: pointer;
  border: 1px solid #fff;
  padding: 0.2rem 0.7rem;
  display: inline-block;
  font-size: 0.9rem;
  background: #fff;
  color: #01579b;

  &:visited {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Row = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 1rem;
`;

const Info = styled("div")<{
  onClick: () => void;
  onKeyUp: (evt: KeyboardEvent) => void;
}>`
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1rem;
  border: 1px solid #ccc;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Item = styled("div")`
  margin: 0;
  padding: 0;
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
