import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import MaterialTable from "material-table";
import { useRouter } from "next/router";
import { slugify } from "../utilities";

type HomeProps = {
  schools: SchoolsInput[];
  columns: { title: string; field: string }[];
};

function Home({ schools, columns }: HomeProps) {
  const router = useRouter();
  return (
    <Wrapper>
      <MaterialTable
        actions={[
          {
            icon: "info",
            tooltip: "View info",
            onClick: (event, rowData: SchoolsInput | SchoolsInput[]) =>
              router.push(
                `/schools/${slugify(
                  "schoolName" in rowData ? rowData.schoolName : ""
                )}`
              ),
          },
        ]}
        columns={columns}
        data={schools}
        title="Educational Institutions in Liberia"
        options={{
          pageSize: 50,
          pageSizeOptions: [50, 100, 150, 200],
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

  const columns = [
    { title: "EMIS Number", field: "emisNumber" },
    { title: "School Name", field: "schoolName" },
    { title: "County", field: "county" },
    { title: "District", field: "district" },
    { title: "School Type", field: "schoolType" },
    { title: "Junior High", field: "jhsSchool" },
    { title: "Senior High", field: "shsSchool" },
    { title: "Primary School", field: "primarySchool" },
  ];

  return {
    props: {
      schools,
      columns,
    },
  };
}

const Wrapper = styled.div`
  padding: 5rem 1rem;
  margin: 0 auto;
  width: 100%;
`;

export default Home;
