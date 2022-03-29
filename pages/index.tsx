import data from "../data/schools.json";
import { SchoolsInput } from "../models";
import styled from "styled-components";
import React, { useState } from "react";
import { Pagination, School, SearchBox } from "../components";
import { Paper } from "@mui/material";
import { doFilter, doSort, doPagination } from "../helpers";
import { useFilters } from "../hooks/useFilters";

type HomeProps = {
  schools: SchoolsInput[];
};

function Home({ schools }: HomeProps) {
  const { state, dispatch } = useFilters();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const filteredResult = doFilter(schools, state.filterBy, state.search);
  const sortedResult = doSort(filteredResult, state.sortBy);
  const paginatedResult = doPagination(sortedResult, page, rowsPerPage);

  return (
    <Wrapper>
      <SearchBox dispatch={dispatch} />
      <Paper>
        {paginatedResult.map((school) => (
          <School key={school.emisNumber} school={school} />
        ))}
        <Pagination
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          size={sortedResult.length}
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
