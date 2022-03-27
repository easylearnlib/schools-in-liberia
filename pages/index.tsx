import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import MaterialTable from "material-table";
import { slugify } from "../utilities";
import Link from "next/link";
import Footer from "../components/Footer";
import React, { useReducer } from "react";
import { SearchBox } from "../components";

export type Action = {
  type: string;
  value: string | "emisNumber" | "schoolName" | "schoolType" | "county";
};

export type State = {
  search: string;
  sortBy: "emisNumber" | "schoolName" | "schoolType" | "county";
};

type HomeProps = {
  schools: SchoolsInput[];
};

const initialState: State = {
  search: "",
  sortBy: "emisNumber",
};

function reducer(state: State, action: Action): State {
  let newState: State;
  switch (action.type) {
    case "search":
      newState = { ...state, search: action.value };
      break;
    case "sortBy":
      // @ts-ignore
      newState = { ...state, sortBy: action.value };
      break;
    default:
      throw new Error();
  }
  return newState;
}

function Home({ schools }: HomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredSchools = schools.filter((school) =>
    school.schoolName.toLowerCase().includes(state.search.toLowerCase())
  );

  // @ts-ignore
  const sortedSchools = filteredSchools.sort(
    (a: SchoolsInput, b: SchoolsInput) =>
      a[state.sortBy].localeCompare(b[state.sortBy])
  );

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
      <SearchBox dispatch={dispatch} />
      <MaterialTable
        columns={columns}
        data={sortedSchools}
        title={<Title>Liberia School System</Title>}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100, 150, 200],
          toolbar: false,
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
    color: #01579b;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #01579b;
  margin: 0;
`;

export default Home;
