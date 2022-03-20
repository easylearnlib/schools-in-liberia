import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { School, SearchBox } from "../../components";
import Link from "next/link";
import styled from "styled-components";

type HomeProps = {
  school: SchoolsInput[];
  total: number;
  page: number;
};

function SchoolDetails({ school, total, page }: HomeProps) {
  const hasNextPage = Math.ceil(total / 50) > page;
  const hasPreviousPage = page > 1;
  return (
    <Wrapper>
      <SearchBox />
      <div>
        {school.map((item) => (
          <School key={item.emisNumber} options={item} />
        ))}
      </div>

      <div>
        <div>
          {hasPreviousPage && (
            <Link href={`/archives/${page - 1}`} passHref>
              <a>
                Previous {page - 1}/{total}
              </a>
            </Link>
          )}
          {hasNextPage && (
            <Link href={`/archives/${page + 1}`} passHref>
              <a>
                Next {page + 1}/{total}
              </a>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const pages = Math.ceil(data.length / 50);

  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { page: String(page + 1) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { page: number } }) {
  const { page } = params;
  const total = data.length;

  return {
    props: {
      school: data.slice((page - 1) * 50, page * 50),
      page: Number(page),
      total: total,
    },
  };
}

const Wrapper = styled.div`
  padding: 5rem 1rem;
  margin: 0 auto;
  width: 100%;
`;

export default SchoolDetails;
