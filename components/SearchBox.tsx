import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Action } from "../pages";
import { insertElement } from "../helpers";

type SelectedType = {
  selectedCounties: string[];
  selectedSchoolType: string[];
  selectedRatings: string[];
  selectedFacilities: string[];
};

type Props = {
  dispatch: React.Dispatch<Action>;
};

const initialState: SelectedType = {
  selectedCounties: [],
  selectedSchoolType: [],
  selectedRatings: [],
  selectedFacilities: [],
};

export default function SearchBox(props: Props) {
  const { dispatch } = props;

  const [filterState, setFilterState] = React.useState(initialState);
  console.log(filterState);

  const handleSort = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "sortBy", value: evt.target.value });
  };
  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "search", value: evt.currentTarget.value });
  };

  const handleFilter = () => {
    dispatch({ type: "filterBy", value: filterState });
    setFilterState(initialState);
  };

  const handleCountyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = insertElement(
      filterState.selectedCounties,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedCounties: newArray,
    });
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = insertElement(
      filterState.selectedSchoolType,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedSchoolType: newArray,
    });
  };

  const handleFacilitiesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newArray = insertElement(
      filterState.selectedFacilities,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedFacilities: newArray,
    });
  };
  const handleRatingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = insertElement(
      filterState.selectedRatings,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedRatings: newArray,
    });
  };

  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawer(!drawer);
  };

  return (
    <Paper sx={{ m: "0.5rem 0rem" }}>
      <Container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          p: 1,
          px: { xs: "1rem", md: "4rem" },
          justifyContent: { xs: "flex-start", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <FlexLeft
          sx={{
            gap: { xs: "0.5rem", md: "1rem" },
          }}
        >
          <Label htmlFor="sort-by">Sort by:</Label>
          <Select id="sort-by" onChange={handleSort}>
            <Option value={"emisNumber"}>EMIS</Option>
            <Option value={"schoolName"}>Name</Option>
            <Option value={"schoolType"}>Type</Option>
            <Option value={"county"}>County</Option>
            <Option value={"emisNumber"}>Rating</Option>
          </Select>
        </FlexLeft>
        <FlexRight
          sx={{
            justifyContent: { md: "flex-end" },
            gap: { xs: "0.5rem", md: "1rem" },
          }}
        >
          <Input
            onChange={handleSearch}
            placeholder={"search by school name"}
          />
          <MuiButton onClick={(event) => toggleDrawer(event)}>
            search with filters
          </MuiButton>
        </FlexRight>
      </Container>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={() => {
          setFilterState(initialState);
          setDrawer(false);
        }}
        onOpen={() => {
          setFilterState(initialState);
          setDrawer(true);
        }}
      >
        <Box
          sx={{ width: { xs: 250, lg: 500 }, py: 8, px: { xs: 1, md: 3 } }}
          role="presentation"
          onClick={(event) => {
            toggleDrawer(event);
          }}
          onKeyDown={(event) => toggleDrawer(event)}
        >
          <Divider />
          <List>
            Counties:
            <MuiFormGroup>
              {[
                "Bomi",
                "Montserrado",
                "Grand Bassa",
                "Margibi",
                "Lofa",
                "Sinoe",
                "River Gee",
                "Rivercess",
                "Nimba",
                "Gbarpolu",
                "Bong",
                "Grand cape mount",
                "Grand Gedeh",
                "Grand kru",
                "Maryland",
              ].map((county) => (
                <FormControlLabel
                  key={county}
                  control={
                    <Checkbox
                      name={county}
                      onChange={handleCountyChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={county}
                />
              ))}
            </MuiFormGroup>
          </List>
          <Divider />
          <List>
            School Type:
            <MuiFormGroup>
              {["Private", "Public", "Faith", "Community"].map((type) => (
                <FormControlLabel
                  key={type}
                  control={
                    <Checkbox
                      name={type}
                      onChange={handleTypeChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={type}
                />
              ))}
            </MuiFormGroup>
          </List>
          <Divider />
          <List>
            Facilities:
            <MuiFormGroup>
              {["Computer Labs", "Gymnasium", "Laboratory"].map((facility) => (
                <FormControlLabel
                  key={facility}
                  control={
                    <Checkbox
                      name={facility}
                      onChange={handleFacilitiesChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={facility}
                />
              ))}
            </MuiFormGroup>
          </List>
          <Divider />
          <List>
            Ratings:
            <MuiFormGroup>
              {["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"].map(
                (rating) => (
                  <FormControlLabel
                    key={rating}
                    control={
                      <Checkbox
                        name={rating}
                        onChange={handleRatingsChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={rating}
                  />
                )
              )}
            </MuiFormGroup>
          </List>
          <Divider />
          <List sx={{ textAlign: "right" }}>
            <Button onClick={() => setFilterState(initialState)}>Reset</Button>
            <Button onClick={handleFilter}>Show results</Button>
          </List>
        </Box>
      </SwipeableDrawer>
    </Paper>
  );
}
const MuiFormGroup = styled(FormGroup)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 0.5rem;
`;

const Container = styled(Box)`
  display: flex;
  min-height: 8rem;
`;

const FlexLeft = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 1rem;
`;

const FlexRight = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
`;

const MuiButton = styled(Button)`
  text-transform: lowercase;
  display: flex;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    background: none;
  }
`;

const Label = styled("label")<{
  htmlFor: string;
}>`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Select = styled("select")<{
  onChange: React.ChangeEventHandler;
}>`
  border: 0;
  outline: 0;
`;
const Option = styled("option")``;
