import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import MaterialTable from "material-table";
import { slugify } from "../utilities";
import Link from "next/link";
import Footer from "../components/Footer";
import React from "react";

type HomeProps = {
  schools: SchoolsInput[];
};

function Home({ schools }: HomeProps) {
  const columns = [
    {
      title: "EMIS Number",
      field: "emisNumber",
    },
    {
      title: "School Name",
      field: "schoolName",
      render: (rowData: SchoolsInput) => (
        <Link href={`/schools/${slugify(rowData.schoolName)}`} passHref>
          <Anchor>{rowData.schoolName}</Anchor>
        </Link>
      ),
    },
    { title: "School Type", field: "schoolType" },
    { title: "District", field: "district" },
    { title: "County", field: "county" },
  ];

  return (
    <Wrapper>
      <MaterialTable
        columns={columns}
        data={schools}
        title={<Title>Liberia School System</Title>}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100, 150, 200],
          exportButton: true,
          grouping: true,
          sorting: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            fontWeight: 700,
          },
        }}
      />
      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const schools = data.map((item) => ({
    emisNumber: item.emisNumber,
    schoolName: item.schoolName,
    schoolType: item.schoolType,
    district: item.district,
    county: item.county,
  }));

  return {
    props: {
      schools,
    },
  };
}

const Wrapper = styled.div`
  margin: 2rem 0;
  justify-content: center;
  width: 100%;
`;

const Anchor = styled.a`
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;

  &:visited {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    text-decoration: underline;
    color: rgba(0, 46, 162, 1);
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(0, 46, 162, 1);
  margin: 0;
`;

export default Home;
