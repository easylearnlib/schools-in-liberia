import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import MaterialTable from "material-table";
import { slugify } from "../utilities";
import Link from "next/link";
import { Grid } from "@mui/material";
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
        <Link href={`/schools/${slugify(rowData.schoolName)}`}>
          <Anchor>{rowData.schoolName}</Anchor>
        </Link>
      ),
    },
    { title: "County", field: "county" },
    { title: "District", field: "district" },
    { title: "School Type", field: "schoolType" },
    { title: "Junior High", field: "jhsSchool" },
    { title: "Senior High", field: "shsSchool" },
    { title: "Primary School", field: "primarySchool" },
  ];

  return (
    <Wrapper container>
      <MaterialTable
        columns={columns}
        data={schools}
        title="Education Liberia"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100, 150, 200],
          exportButton: true,
          grouping: true,
          sorting: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
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
    county: item.county,
    district: item.district,
    schoolType: item.schoolType,
    jhsSchool: item.jhsSchool,
    shsSchool: item.shsSchool,
    primarySchool: item.primarySchool,
  }));

  return {
    props: {
      schools,
    },
  };
}

const Wrapper = styled(Grid)`
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

export default Home;
