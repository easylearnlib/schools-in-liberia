import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import { ActionType, SelectedType } from "../models";
import { insertElement } from "../helpers";
import { Counties, Facilities, Ratings, SchoolTypes } from "../constants";
import MuiCheckbox from "./MuiCheckbox";

const initialState: SelectedType = {
  selectedCounties: [],
  selectedSchoolType: [],
  selectedRatings: [],
  selectedFacilities: [],
};

type Props = {
  dispatch: React.Dispatch<ActionType>;
  drawer: boolean;
  setDrawer: (state: boolean) => void;
  toggleDrawer: (evt: React.KeyboardEvent | React.MouseEvent) => void;
};

export default function MultiFilter(props: Props) {
  const [filterState, setFilterState] = React.useState(initialState);
  const { dispatch, drawer, setDrawer, toggleDrawer } = props;

  const handleFilter = (evt: React.MouseEvent) => {
    dispatch({ type: "filterBy", value: filterState });
    toggleDrawer(evt);
  };

  const handleReset = () => {
    setFilterState({
      ...filterState,
      selectedSchoolType: [],
      selectedRatings: [],
      selectedFacilities: [],
      selectedCounties: [],
    });
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

  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = insertElement(
      filterState.selectedFacilities,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedFacilities: newArray,
    });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = insertElement(
      filterState.selectedRatings,
      event.target.name
    );
    setFilterState({
      ...filterState,
      selectedRatings: newArray,
    });
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => setDrawer(true)}
    >
      <Box
        sx={{ width: { xs: 250, lg: 500 }, py: 8, px: { xs: 1, md: 3 } }}
        role="presentation"
      >
        <Divider />
        <List>
          <Title> Counties:</Title>
          <MuiFormGroup>
            {Counties.map((county) => (
              <MuiCheckbox
                key={county}
                name={county}
                checked={filterState.selectedCounties.includes(county)}
                onChange={handleCountyChange}
              />
            ))}
          </MuiFormGroup>
        </List>
        <Divider />
        <List>
          <Title> School Type:</Title>
          <MuiFormGroup>
            {SchoolTypes.map((type) => (
              <MuiCheckbox
                key={type}
                checked={filterState.selectedSchoolType.includes(type)}
                name={type}
                onChange={handleTypeChange}
              />
            ))}
          </MuiFormGroup>
        </List>
        <Divider />
        <List>
          <Title>Facilities: </Title>
          <MuiFormGroup>
            {Facilities.map((facility) => (
              <MuiCheckbox
                key={facility}
                checked={filterState.selectedFacilities.includes(facility)}
                name={facility}
                onChange={handleFacilityChange}
              />
            ))}
          </MuiFormGroup>
        </List>
        <Divider />
        <Title>Ratings:</Title>
        <List>
          <MuiFormGroup>
            {Ratings.map((rating) => (
              <MuiCheckbox
                key={rating}
                name={rating}
                checked={filterState.selectedRatings.includes(rating)}
                onChange={handleRatingChange}
              />
            ))}
          </MuiFormGroup>
        </List>
        <Divider />
        <SearchArea>
          <Button color="warning" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" onClick={handleFilter}>
            Show results
          </Button>
        </SearchArea>
      </Box>
    </SwipeableDrawer>
  );
}

const MuiFormGroup = styled(FormGroup)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  justify-content: center;
  gap: 0.5rem;
`;

const Title = styled("h4")`
  margin: 1rem;
`;

const SearchArea = styled(List)`
  text-align: right;
  margin: 1rem 0;

  > button {
    margin-right: 1rem;
    font-weight: 700;
  }
`;
