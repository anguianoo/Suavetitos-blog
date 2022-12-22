import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Header from "../components/Navbar";
import Script from "next/script";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/cla30zfpk2mcv01uk1nc70jkz/master"
);

const QUERY = gql`
  {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      content {
        text
      }
      slug
      title
      datePublished
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Suavetito's Blog</title>
          <meta name="description" content="SuaveTito's Blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {posts.map((posts, id) => (
            <BlogCard
              title={posts.title}
              author={posts.author}
              content={posts.content.text}
              coverPhoto={posts.coverPhoto}
              key={id}
              datePublished={posts.datePublished}
              slug={posts.slug}
            />
          ))}
        </main>
      </div>
    </>
  );
}
