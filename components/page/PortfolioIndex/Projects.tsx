import React from "react";
import Image from "next/image";
import Link from "next/link";

const img = "/img.webp";

const projectList = [
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
];
const Projects = ({ col }) => {
  // const [projectHover, setProjectHover] = React.useState(false);
  return (
    <div className={`flex flex-wrap justify-center`}>
      {projectList.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-1/3 h-80 relative xl:w-1/5 ${
              index > 8 && "hidden lg:block"
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
  );
};

export default Projects;
