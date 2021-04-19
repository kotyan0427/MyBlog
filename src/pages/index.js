import Head from "next/head";
import { Card } from "./../components/organism/Card";
import { Header } from "./../components/organism/Header";

const Index = () => {
  return (
    <>
      <Head>
        <title>とある仙台住みのロッテブログ</title>
      </Head>
      <Header />
      <div className="md:flex md:px-5">
        <Card />
        <aside className="flex-grow">aside</aside>
      </div>
    </>
  );
};

export default Index;
