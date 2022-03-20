import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return <Wrapper>{school.schoolName}</Wrapper>;
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
  align-items: center;
  justify-content: center;
`;

export default SchoolDetails;
