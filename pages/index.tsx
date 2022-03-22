import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import MaterialTable from "material-table";
import { slugify } from "../utilities";
import Link from "next/link";

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
          <a>{rowData.schoolName}</a>
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
    <Wrapper>
      <MaterialTable
        columns={columns}
        data={schools}
        title="Educational Institutions in Liberia"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100, 150, 200],
          exportButton: true,
          grouping: true,
          sorting: true,
        }}
      />
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

const Wrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
`;

export default Home;
