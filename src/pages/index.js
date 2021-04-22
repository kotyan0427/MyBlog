import Head from "next/head";
import { useFetchData } from "../components/Hooks/useFetchData";
import { SideMenu } from "../components/organism/SideMenu";
import { Card } from "./../components/organism/Card";
import { Header } from "./../components/organism/Header";

const Index = ({ blog }) => {
  return (
    <>
      <Head>
        <title>とある仙台住みのロッテブログ</title>
      </Head>
      <Header />
      <div className="px-5 md:flex md:px-5">
        <Card blog={blog} />
        <SideMenu />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { blogData } = await useFetchData();
  return {
    props: {
      blog: blogData.contents,
    },
  };
};

export default Index;
