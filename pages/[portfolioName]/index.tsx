import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Headline from "components/PortfolioIndex/Headline";
import { get } from "components/modules/remote";
import About from "components/PortfolioIndex/About";
import Blog from "components/PortfolioIndex/Blog";
import DataError from "components/DataError";
import Contact from "components/PortfolioIndex/Contact";
import ThemeToggleBtn from "components/themeToggleBtn";

const UserPage = ({ data, message }) => {
  const [darkMode, setDarkMode] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("res: ", data);
  console.log("mes: ", message);

  if (data === undefined) {
    return <DataError />;
  }

  return (
    <div className={`${darkMode && "dark"} flex `} style={{ direction: "rtl" }}>
      {/* <button
        className="fixed left-4 top-4 z-10 md:hidden"
        onClick={() => setSidebarOpen((state) => !state)}
      ></button> */}
      {/* <Sidebar {...{ darkMode, setDarkMode }} /> */}
      <ThemeToggleBtn {...{ darkMode, setDarkMode }} />
      <div className="min-h-screen w-full dark:bg-[#1d1d1d] bg-gray-100 relative z-0 transition-all duration-150 dark:text-gray-50">
        <div>
          <Head>
            <title>{data.userName}</title>
          </Head>
          <main>
            <section className="flex min-h-screen">
              <div className="mr-6 md:mr-10 flex flex-col justify-center">
                <Headline {...data.headline} headlineBtn={data.headlineBtn} />
              </div>
            </section>
            {data.aboutSection && (
              <section className="min-h-screen md:h-screen my-5 md:m-0">
                <About
                  header={data.aboutSection.title}
                  text={data.aboutSection.text}
                />
              </section>
            )}
            {data.blogSection && (
              <section>
                <div className="my-32">
                  {data.blogs && <Blog blogArray={data.blogs} />}
                </div>
              </section>
            )}
            {data.contactSection && (
              <section className="min-h-screen md:h-screen ">
                <Contact
                  title={data.contactSection.title}
                  text={data.contactSection.text}
                />
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

// UserPage.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>;
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const portfolioName = params.portfolioName;
  console.log("port: ", portfolioName);
  const param = {
    params: {
      populate: "*",
      "filters[portfolioName][$eq]": portfolioName,
    },
  };
  const data = await get("/portfolios", param);
  console.log("de: ", data);
  if (data === undefined) {
    return { notFound: true };
  }
  return { props: { data: data } };
};

export default UserPage;
