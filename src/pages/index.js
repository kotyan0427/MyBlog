import Head from "next/head";
import { useFetchData } from "../components/Hooks/useFetchData";
import { Blog } from "../components/organism/Blog";
import { Footer } from "../components/organism/Footer";
import { Header } from "../components/organism/Header";
import { SideMenu } from "../components/organism/SideMenu";
import { UseContextTags } from "../components/provider/UseContextTags";

const Index = ({ blog }) => {
  return (
    <UseContextTags>
      <Head>
        <title>とある仙台住みのロッテブログ</title>
        <link rel="icon" href="/images/android-chrome-36x36.png" />
      </Head>
      <Header />
      <div className="mb-6 px-5 md:flex md:items-start">
        <Blog blog={blog} />
        <SideMenu />
      </div>
      <Footer />
    </UseContextTags>
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
