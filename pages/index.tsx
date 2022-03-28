import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import Footer from "../components/Footer";
import React, { useReducer } from "react";
import { Pagination, School, SearchBox } from "../components";

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
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const filteredSchools = schools.filter((school) =>
    school.schoolName.toLowerCase().includes(state.search.toLowerCase())
  );

  // @ts-ignore
  const sortedSchools = filteredSchools.sort(
    (a: SchoolsInput, b: SchoolsInput) =>
      a[state.sortBy].localeCompare(b[state.sortBy])
  );

  let startPoint = (page - 1) * rowsPerPage;

  const PaginatedSchools = sortedSchools.slice(
    startPoint,
    startPoint + rowsPerPage
  );

  return (
    <Wrapper>
      <SearchBox dispatch={dispatch} />
      {PaginatedSchools.map((school) => (
        <School school={school} />
      ))}
      <Pagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        size={sortedSchools.length}
      />
      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      schools: data,
    },
  };
}

const Wrapper = styled.div`
  margin-top: 2rem;
  justify-content: center;
  box-shadow: 5px 10px 18px #888888;
  width: 100%;
  background: #fff;
`;

export default Home;
