import Head from "next/head";
import { key } from "../components/constants/headersKey";
import { useFetchData } from "../components/Hooks/useFetchData";
import { Footer } from "../components/organism/Footer";
import { Header } from "../components/organism/Header";
import { IndividualBlog } from "../components/organism/IndividualBlog";
import { SideMenu } from "../components/organism/SideMenu";
import { UseContextTags } from "../components/provider/UseContextTags";

const BlogArticle = ({ individualBlog }) => {
  return (
    <UseContextTags>
      <Head>
        <title>{individualBlog.title}</title>
        <link rel="icon" href="/images/android-chrome-36x36.png" />
      </Head>
      <Header />
      <div className="mb-6 px-5 md:flex md:items-start">
        <IndividualBlog blog={individualBlog} />
        <SideMenu />
      </div>
      <Footer />
    </UseContextTags>
  );
};

export const getStaticPaths = async () => {
  const { blogData } = await useFetchData();
  const paths = blogData.contents.map((blog) => {
    return `/${blog.id}`;
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.BlogArticle;
  const individualBlog = await fetch(`https://lotteblog.microcms.io/api/v1/myblog/${id}`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => console.error());

  return {
    props: {
      individualBlog,
      revalidate: 30,
    },
  };
};

export default BlogArticle;
