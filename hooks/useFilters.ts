import { useReducer } from "react";
import { FilterType, ActionType, StateType } from "../models";

const initialFilter: FilterType = {
  selectedCounties: [],
  selectedSchoolType: [],
  selectedRatings: [],
  selectedFacilities: [],
};

const initialState: StateType = {
  search: "",
  sortBy: "emisNumber",
  filterBy: initialFilter,
};

function reducer(state: StateType, action: ActionType): StateType {
  let newState: StateType;
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

export function useFilters() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
