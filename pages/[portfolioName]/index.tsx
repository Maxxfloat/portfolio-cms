import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ThemeContext } from "components/stateManager/context";
import Headline from "components/page/PortfolioIndex/Headline";
import { get } from "components/modules/remote";
import Projects from "components/page/PortfolioIndex/Projects";
import About from "components/page/PortfolioIndex/About";
import Blog from "components/page/PortfolioIndex/Blog";
import DataError from "components/DataError";
import Contact from "components/page/PortfolioIndex/Contact";

interface HeadlineType {
  headline: {
    headlineText: string;
    headlineSupport: string;
  };
}

const UserPage: React.FC<{ data: any; portfolioName: string }> = ({ data }) => {
  const router = useRouter();
  const { darkMode, setDarkMode } = React.useContext(ThemeContext);
  console.log("res: ", data);

  const pageData = data.pages.main;

  if (!data) return <DataError />;
  return (
    <div>
      <Head>
        <title>{data.userName}</title>
      </Head>
      <main>
        <section className="flex min-h-screen">
          <div className="mr-6 md:mr-10 flex flex-col justify-center">
            <div className="mb-14">
              <Headline {...pageData.headline} />
            </div>
            <Link href={`/${data.userName}/contact`}>
              <a className="border-2 font-[yekanRe] mb-20 border-black px-2 text-center mt-5 w-48 text-xl font-bold leading-loose ">
                تماس با من
              </a>
            </Link>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="relative mb-14 mr-2 md:mr-5">
            <h1 className="mr-5 font-[yekanRe] text-4xl md:text-7xl font-bold">
              {pageData.projects.title}
            </h1>
            <p className="text-justify mx-8 font-[kara] mt-10 font-bold text-lg max-w-4xl whitespace-pre-line">
              {pageData.projects.text}
            </p>
            <div className="my-5">
              <Link href={`/${data.userName}/work`}>
                <a className="border-2 mr-8  font-[yekanRe] border-black px-8 py-1 text-center text-lg font-bold">
                  پروژه های بیشتر!!
                </a>
              </Link>
            </div>
            <div className="absolute opacity-[15%] -z-10 text-[10rem] md:text-[13rem] lg:text-[16rem] lg:-top-24 lg:right-96 xl:text-[20rem] font-[elham] top-36 right-14">
              پروژه‌ها
            </div>
          </div>
          <div className="w-full">
            <Projects col={1} />
          </div>
        </section>
        <section className="">
          <div className="mt-60">
            <About header={pageData.about.title} text={pageData.about.text} />
          </div>
        </section>
        <section>
          <div className="my-32">
            <Blog blogArray={data.blogs} />
          </div>
        </section>
        {/* <section className="min-h-screen">
          <Contact />
        </section> */}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const portfolioName = params.portfolioName;
  console.log("port: ", portfolioName);
  const param = {
    params: {
      userName: portfolioName,
    },
  };

  const data = await get("/user", param);
  if (data) return { props: { data } };
  return { props: {} };
};
export const getStaticPaths: GetStaticPaths =
  // <{
  //   portfolioName: string;
  // }>
  async () => {
    return { paths: [], fallback: "blocking" };
  };

export default UserPage;
