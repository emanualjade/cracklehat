import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/Date";

import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout root>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, category, thumbnail }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a style={{ width: "90px", display: "block", marginRight: "15px" }}>
                  <img src={thumbnail} style={{ width: "100%", borderRadius: "5px" }} />
                </a>
              </Link>
              <div>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <div>
                  <span
                    style={{ fontSize: "14px" }}
                    className={utilStyles.lightText}
                  >
                    <Date dateString={date} />
                  </span>
                  <span style={{ margin: "0 5px" }}>&middot;</span>
                  <div className={utilStyles.tag}>{category}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
