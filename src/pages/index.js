import Head from "next/head";
import { useFetchData } from "../components/Hooks/useFetchData";
import { Footer } from "../components/organism/Footer";
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
      <div className="mb-6 px-5 md:flex ">
        <Card blog={blog} />
        <SideMenu />
      </div>
      <Footer />
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
