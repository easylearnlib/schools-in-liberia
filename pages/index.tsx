import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import React, { useReducer } from "react";
import { Pagination, School, SearchBox } from "../components";
import { Paper } from "@mui/material";
import { noFilteredApply } from "../helpers";

type FilterType = {
  selectedCounties: string[];
  selectedSchoolType: string[];
  selectedRatings: string[];
  selectedFacilities: string[];
};

const initialFilter: FilterType = {
  selectedCounties: [],
  selectedSchoolType: [],
  selectedRatings: [],
  selectedFacilities: [],
};

export type Action = {
  type: string;
  value:
    | string
    | "emisNumber"
    | "schoolName"
    | "schoolType"
    | "county"
    | FilterType;
};

export type State = {
  search: string;
  sortBy: "emisNumber" | "schoolName" | "schoolType" | "county";
  filterBy: FilterType;
};

type HomeProps = {
  schools: SchoolsInput[];
};

const initialState: State = {
  search: "",
  sortBy: "emisNumber",
  filterBy: initialFilter,
};

function reducer(state: State, action: Action): State {
  let newState: State;
  switch (action.type) {
    case "search":
      // @ts-ignore
      newState = { ...state, search: action.value };
      break;
    case "sortBy":
      // @ts-ignore
      newState = { ...state, sortBy: action.value };
      break;
    case "filterBy":
      // @ts-ignore
      newState = { ...state, filterBy: action.value };
      break;
    default:
      throw new Error();
  }
  return newState;
}

function Home({ schools }: HomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const PrimaryFilter = schools.filter((school) => {
    const {
      selectedCounties,
      selectedSchoolType,
      selectedRatings,
      selectedFacilities,
    } = state.filterBy;
    if (
      noFilteredApply(
        selectedCounties,
        selectedSchoolType,
        selectedRatings,
        selectedFacilities
      )
    )
      return true;
    return (
      selectedCounties.includes(school.county) ||
      selectedSchoolType.includes(school.schoolType)
    );
  });

  const filteredSchools = PrimaryFilter.filter((school) =>
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
      <Paper>
        {PaginatedSchools.map((school) => (
          <School key={school.emisNumber} school={school} />
        ))}
        <Pagination
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          size={sortedSchools.length}
        />
      </Paper>
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
  margin: 0.5rem 0;
  justify-content: center;
  width: 100%;
`;

export default Home;
