// @ts-ignore
import data from "../../data/schools.json";

import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Grid } from "@mui/material";
import Layout from "../../components/Layout";
import SchoolContact from "../../components/school/SchoolContact";
import SchoolFacilities from "../../components/school/SchoolFacilities";
import SchoolHero from '../../components/school/SchoolHero'
import '../../components/school/SchoolDetails.css'
import SchoolMap from "../../components/school/SchoolMap";
import SchoolTimetable from "../../components/school/SchoolTimetable";
import SchoolFees from "../../components/school/SchoolFees";
import SchoolEvents from '../../components/school/SchoolEvents'
import SchoolPerformance from "../../components/school/SchoolPerformance";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return (
    <Layout showNav={true} showSideImage={false} schoolName={school.schoolName}>
      <Wrapper>
        <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />  
        <Container>
           <div className="school-page">
               <SchoolHero name={school.schoolName} imageUrl={'https://images.unsplash.com/photo-1632215863479-201029d93143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'} />
               <div className="school-grid">
                 <SchoolContact contact={{
                  district: school.district,
                  county: school.county
                 }} />
                 <SchoolMap location={school.location} />
                 <SchoolTimetable academicCalendar={school.academicCalendar} />
                 <SchoolFacilities facilities={school.facilities} />
                 <SchoolFees fees={school.fees! } />
                 <SchoolEvents events={school.events} />
               </div>
               <SchoolPerformance performance={school.examPerformance} />
             </div>
        </Container>
      </Wrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = data.map((obj: any) => ({
    params: {
      name: `${slugify(obj.schoolName)}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const schoolRaw = data.find(
    (obj: {
      schoolName: string
    }) => params.name === `${slugify(obj.schoolName)}`
  );

  const defaultSchool: SchoolsInput = {
    schoolName: "Unknown School",
    schoolType: "Unknown",
    county: "Unknown",
    district: "Unknown",
    emisNumber: "N/A",
    shsSchool: false,
    jhsSchool: false,
    primarySchool: false,
    tvetSchool: false,
    abeSchool: false,
    alpSchool: false,
    eceSchool: false,
    kind: false,
    facilities: [],
    rating: "N/A",
    numberOfStudents: 0,
    waecPassRate: "0%",
    emailAddress: [],
    contactNumber: [],
    images: [],
    fees: {
      "Grade 1": 0,
      "Grade 2": 0,
      "Grade 3": 0,
      "Grade 4": 0,
      "Grade 5": 0,
      "Grade 6": 0,
      "Grade 7": 0,
      "Grade 8": 0,
      "Grade 9": 0,
      "Grade 10": 0,
      "Grade 11": 0,
      "Grade 12": 0,
    },
    events: [],
    academicCalendar: [],
    examPerformance: [],
    location: { lat: 0, lng: 0 },
  };

  const school: SchoolsInput = {
    ...defaultSchool,
    ...schoolRaw,
    facilities: schoolRaw?.facilities || [],
    emailAddress: schoolRaw?.emailAddress || [],
    contactNumber: schoolRaw?.contactNumber || [],
    images: schoolRaw?.images || [],
    fees: schoolRaw?.fees || defaultSchool.fees,
    events: schoolRaw?.events || [],
    academicCalendar: schoolRaw?.academicCalendar || [],
    examPerformance: schoolRaw?.examPerformance || [],
    location: schoolRaw?.location || defaultSchool.location,
  };

  return {
    props: {
      school,
    },
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
