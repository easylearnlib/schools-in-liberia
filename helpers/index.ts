import { FilterType, SchoolsInput } from "../models";

function isNotAMember(array: string[], value: string): Boolean {
  return array.indexOf(value) === -1;
}

function addToArray(array: string[], value: string): string[] {
  array.push(value);
  return array;
}

function removeFromArray(array: string[], value: string): string[] {
  const index = array.indexOf(value);
  array.splice(index, 1);
  return array;
}

export function insertElement(array: string[], value: string): string[] {
  if (isNotAMember(array, value)) {
    return addToArray(array, value);
  } else {
    return removeFromArray(array, value);
  }
}

export function noFilteredApply(filterBy: FilterType): Boolean {
  return (
    filterBy.selectedCounties.length < 1 &&
    filterBy.selectedSchoolType.length < 1
  );
}

export function doFilter(
  schools: SchoolsInput[],
  filterBy: FilterType,
  search: string
) {
  const primaryFilter = schools.filter((school) => {
    if (noFilteredApply(filterBy)) {
      return true;
    } else {
      return (
        filterBy.selectedCounties.includes(school.county) ||
        filterBy.selectedSchoolType.includes(school.schoolType)
      );
    }
  });

  return primaryFilter.filter((school) =>
    school.schoolName.toLowerCase().includes(search.toLowerCase())
  );
}

export function doSort(filteredResult: SchoolsInput[], sortBy: string) {
  filteredResult.sort((a: SchoolsInput, b: SchoolsInput) =>
    // @ts-ignore
    a[sortBy].localeCompare(b[sortBy])
  );
  return filteredResult;
}

export function doPagination(
  sortedSchools: SchoolsInput[],
  page: number,
  rowsPerPage: number
) {
  let startPoint = page * rowsPerPage;
  return sortedSchools.slice(startPoint, startPoint + rowsPerPage);
}
