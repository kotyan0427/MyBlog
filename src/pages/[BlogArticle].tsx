import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { key } from '../components/constants/headersKey';
import { useFetchData } from '../components/Hooks/useFetchData';
import { Footer } from '../components/organism/Footer';
import { Header } from '../components/organism/Header';
import { IndividualBlog } from '../components/organism/IndividualBlog';
import { SideMenu } from '../components/organism/SideMenu';
import { BlogInfoTypes } from '../components/types/blogs';
import { IndividualBlogTypes } from '../components/types/individualBlogTypes';

const BlogArticle: VFC<BlogInfoTypes> = ({ individualBlog }) => {
  return (
    <RecoilRoot>
      <Head>
        <title>{individualBlog.title}</title>
        <link rel="icon" href="/images/android-chrome-36x36.png" />
      </Head>
      <Header />
      <div className="mb-6 px-5 md:flex md:items-start">
        <IndividualBlog individualBlog={individualBlog} />
        <SideMenu />
        <input type="text" inputMode='numeric'/>
      </div>
      <Footer />
    </RecoilRoot>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { blogData } = await useFetchData();
  const paths = blogData!.contents.map((blog) => {
    return `/${blog.id}`;
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.BlogArticle;
  const individualBlog: IndividualBlogTypes | null = await fetch(
    `https://lotteblog.microcms.io/api/v1/myblog/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      individualBlog,
    },
    revalidate: 60,
  };
};

export default BlogArticle;
