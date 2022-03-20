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
  facilities?: string[];
  rating?: string;
  numberOfStudents?: number;
  waecPassRate?: string;
  emailAddress?: string[];
  contactNumber?: number[];
  images: string[];
}
