export interface SchoolsInput {
  schoolName: string;
  schoolType: string;
  county: string;
  district: string;
  emisNumber: string;
  shsSchool: boolean;
  jhsSchool: boolean;
  primarySchool: boolean;
  tvetSchool: boolean;
  abeSchool: boolean;
  alpSchool: boolean;
  eceSchool: boolean;
  kind: boolean;
  facilities: string[];
  rating?: string;
  numberOfStudents?: number;
  waecPassRate?: string;
  emailAddress?: string[];
  contactNumber?: number[];
  images?: string[];
}

export type FilterType = {
  selectedCounties: string[];
  selectedSchoolType: string[];
  selectedRatings: string[];
  selectedFacilities: string[];
};

export type ActionType = {
  type: string;
  value:
    | string
    | "emisNumber"
    | "schoolName"
    | "schoolType"
    | "county"
    | FilterType;
};

export type StateType = {
  search: string;
  sortBy: "emisNumber" | "schoolName" | "schoolType" | "county";
  filterBy: FilterType;
};

export type SelectedType = {
  selectedCounties: string[];
  selectedSchoolType: string[];
  selectedRatings: string[];
  selectedFacilities: string[];
};
