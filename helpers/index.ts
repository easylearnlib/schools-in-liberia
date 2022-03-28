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

export function noFilteredApply(
  selectedCounties: string[],
  selectedSchoolType: string[],
  selectedRatings: string[],
  selectedFacilities: string[]
): Boolean {
  return selectedCounties.length < 1 && selectedSchoolType.length < 1;
}
