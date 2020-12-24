import { getSortedPostsByCategoryData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {

  const paths = [
    {
      params: {
        category: "music",
      },
    },
    {
      params: {
        category: "photography",
      },
    },
    {
      params: {
        category: "code",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const allPostsByCategoryData = getSortedPostsByCategoryData(params.category);
  return {
    props: {
      allPostsByCategoryData,
    },
  };
}

export default function Category({ allPostsByCategoryData }) {

  return (
    <Layout root>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsByCategoryData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
