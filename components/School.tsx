import { SchoolsInput } from "../models";
import Link from "next/link";
import { slugify } from "../utilities";
import styled from "styled-components";

type SchoolProps = {
  options: SchoolsInput;
};
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function School({ options }: SchoolProps) {
  return (
    <Wrapper>
      <Link href={`/${prefix}/schools/${slugify(options.schoolName)}`}>
        <a>{options.schoolName}</a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 60rem;
  border: 1px solid black;
  padding: 2rem 1rem;
  margin: 0 auto;
  width: 100%;
`;
