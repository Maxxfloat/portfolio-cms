import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const img = "/img.webp";

// const projectList = [
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
//   { src: img },
// ];
const Projects = ({ title, text, projectList }) => {
  // const [projectHover, setProjectHover] = React.useState(false);
  const { portfolioName } = useRouter().query;
  return (
    <>
      <div className="relative mb-14 mr-2 md:mr-5">
        <div className="mb-52">
          <h1 className="mr-5 font-[yekanRe] text-4xl md:text-7xl font-bold">
            {title}
          </h1>
          <p className="text-justify mx-4 font-[sahel] leading-8 mt-10 font-bold text-lg md:text-xl max-w-4xl whitespace-pre-line">
            {text}
          </p>
        </div>
        <div className="my-5 mt-10">
          <Link href={`/${portfolioName}/work`}>
            <a className="border-2 mr-8  font-[yekanRe] border-black dark:border-gray-300 px-8 py-1 text-center text-lg font-bold">
              پروژه های بیشتر!!
            </a>
          </Link>
        </div>
        <div className="absolute opacity-[15%] -z-10 text-[10rem] md:text-[13rem] lg:text-[16rem] lg:top-32 lg:right-96 xl:text-[20rem] font-[elham] top-80 right-14">
          پروژه‌ها
        </div>
      </div>
      <div className="w-full">
        <div className={`flex flex-wrap justify-center`}>
          {projectList.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-1/3 h-80 relative xl:w-1/5 ${
                  index > 8 && "hidden xl:block"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 bottom-0 right-0 opacity-70 bg-white hover:opacity-100`}
                  style={{
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="w-full h-full absolute fthis flex justify-center items-center">
                    {/* <div className="w-full h-full absolute bg-gray-300 opacity-30 hover:bg-none " /> */}
                    <Link href={"/"}>
                      <a className="text-center overflow-hidden flex justify-center items-center absolute w-0 h-0 transition-all duration-700 rounded-full">
                        <div className="absolute w-24 h-24 flex justify-center items-center duration-500 bg-blue-400 rounded-full ">
                          بیشتر
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
