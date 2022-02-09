import React, { useContext, useState } from "react";
import { ThemeContext } from "components/stateManager/context";
import { get } from "components/modules/remote";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

interface SidebarItemType {
  linkTitle: string;
  link: string;
}

const SidebarItems = () => {
  const [sidebarLinks, setSidebarLinks] = useState<SidebarItemType[]>();
  const { darkMode, setDarkMode, sidebarOpen } = useContext(ThemeContext);

  const { portfolioName } = useRouter().query;
  React.useEffect(() => {
    const param = {
      params: {
        userName: portfolioName,
      },
    };
    get("/user", param).then((res: any) => {
      setSidebarLinks(() => [...res.pageIndex]);
      return res;
    });
  }, [portfolioName]);

  console.log("FFFF", sidebarLinks);
  return (
    <div
      className={`border-l-2 border-black  dark:bg-[#1d1d1d] dark:border-gray-100  overflow-hidden  lg:w-36 flex-shrink-0 ${
        sidebarOpen ? "w-full" : "w-0"
      }`}
    >
      <div className="fixed w-full h-screen lg:w-36">
        <div className="h-full ">
          <div className="text-4xl  mt-7 text-center flex justify-center">
            <button
              className="border-2 p-2 border-black dark:border-gray-100 rounded-md "
              onClick={() => setDarkMode((value) => !value)}
            >
              {darkMode ? (
                <BsMoonFill className="text-slate-300" />
              ) : (
                <BsSunFill className="text-yellow-600" />
              )}
            </button>
          </div>
          <div className="flex flex-col justify-center h-full">
            {sidebarLinks &&
              sidebarLinks.map((item, index) => {
                return (
                  <Link href={item.link} key={item.link}>
                    <a className="border-b-2 border-black text-center dark:border-gray-100 dark:text-gray-100 py-4 font-[yekanRe]  text-lg ">
                      {item.linkTitle}
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItems;
