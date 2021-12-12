import { GetStaticProps } from 'next';
import Head from "next/head";
import { VFC } from 'react';
import { useFetchData } from '../components/Hooks/useFetchData';
import { Blog } from '../components/organism/Blog';
import { Header } from '../components/organism/Header';
import { SideMenu } from '../components/organism/SideMenu';
import { AllBlogTypes } from '../components/types/allBlogs';
import { Footer } from './../components/organism/Footer';
import {SearchField}from "./../components/organism/SearchField"

const Index: VFC<AllBlogTypes> = ({ blogData }) => {
  return (
    <>
      <Head>
        <title>とある仙台住みのロッテブログ</title>
        <link rel="icon" href="/images/android-chrome-36x36.png" />
      </Head>
      <Header />
      <SearchField />
      <div className="mb-6 px-5 md:flex md:items-start">
        <Blog blogData={blogData} />
        <SideMenu />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { blogData } = await useFetchData();
  return {
    props: {
      blogData,
    },
  };
};

export default Index;
