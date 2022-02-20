import React, { FC, useState } from "react";
// import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Parse from "services/parse";
import Headline from "components/PortfolioIndex/Headline";
// import { get } from "components/modules/remote";
import About from "components/PortfolioIndex/About";
// import Blog from "components/PortfolioIndex/Blog";
// import DataError from "components/DataError";
import Contact from "components/PortfolioIndex/Contact";
import ThemeToggleBtn from "components/ThemeToggleBtn";
import { get } from "components/modules/remote";
import axios from "axios";
import { instance } from "components/modules/configs";
import { Theme } from "components/Layout/Layout";

interface UserPageType {
  portfolioName: string;
  headlineTitle: string;
  headlineText: string;
  aboutTitle: string;
  aboutText: string;
  projectTitle: string;
  projectText: string;
  contactTitle: string;
  contactText: string;
  query: any;
}

const UserPage: FC<UserPageType> = ({
  portfolioName,
  headlineTitle,
  headlineText,
  aboutTitle,
  aboutText,
  projectTitle,
  projectText,
  contactTitle,
  contactText,
}) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const { darkMode } = React.useContext(Theme);
  console.log("qu: ", portfolioName);
  return (
    <div className="flex" style={{ direction: "rtl" }}>
      {/* <button
        className="fixed left-4 top-4 z-10 md:hidden"
        onClick={() => setSidebarOpen((state) => !state)}
      ></button> */}
      {/* <Sidebar {...{ darkMode, setDarkMode }} /> */}
      <div className="min-h-screen w-full relative z-0 transition-all duration-150 ">
        <div>
          <Head>
            <title>{portfolioName}</title>
          </Head>
          <main>
            <section className="flex min-h-screen">
              <div className="mr-6 md:mr-10 flex flex-col justify-center">
                <Headline title={headlineTitle} text={headlineText} />
              </div>
            </section>
            {(aboutTitle || aboutText) && (
              <section className="min-h-screen md:h-screen my-5 md:m-0">
                <About header={aboutTitle} text={aboutText} />
              </section>
            )}
            {/* {()&& (
              <section>
                <div className="my-32">
                  {data.blogs && <Blog blogArray={data.blogs} />}
                </div>
              </section>
            )} */}
            {(contactTitle || contactText) && (
              <section className="min-h-screen md:h-screen ">
                <Contact title={contactTitle} text={contactText} />
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
  const portfolioNameParam = params.portfolioName;

  // const query: Parse.Query = new Parse.Query("portfolio");
  // query.equalTo("portfolioName", portfolioNameParam);
  // const portfolio = await query.first();

  // const headlineTitle: string = portfolio.get("headlineTitle");
  // const headlineText: string = portfolio.get("headlineText");
  // const aboutText: string = portfolio.get("aboutText");
  // const projectTitle: string = portfolio.get("projectTitle");
  // const projectText: string = portfolio.get("projectText");
  // const contactTitle: string = portfolio.get("contactTitle");
  // const contactText: string = portfolio.get("contactText");
  // const aboutTitle: string = portfolio.get("aboutTitle");
  // const portfolioName: string = portfolio.get("portfolioName");
  // const result: any = get(`/portfolio`);
  const result: any = await get("/portfolio", {
    params: {
      where: `{"portfolioName":"${portfolioNameParam}"}`,
    },
  });

  console.log("de: ", result);
  if (result === undefined) {
    return { notFound: true };
  }

  return {
    props: {
      // {
      ...result,
      // headlineTitle,
      // headlineText,
      // aboutTitle,
      // aboutText,
      // projectTitle,
      // projectText,
      // contactTitle,
      // contactText,
    },
  };
};

export default UserPage;
