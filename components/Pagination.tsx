import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import styled from "styled-components";
import { Box } from "@mui/material";

type Props = {
  page: number;
  setPage: (page: number) => void;
  setRowsPerPage: (page: number) => void;
  rowsPerPage: number;
  size: number;
};
export default function Pagination(props: Props) {
  const { page, setPage, setRowsPerPage, rowsPerPage, size } = props;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Wrapper sx={{ px: { xs: "0rem", md: "4rem" } }}>
      <TablePagination
        component="div"
        count={size}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  width: 100%;
`;
