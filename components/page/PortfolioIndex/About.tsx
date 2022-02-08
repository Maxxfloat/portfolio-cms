import React from "react";

interface Types {
  header: string;
  text: string;
}

const About: React.FC<Types> = ({ header, text }) => {
  return (
    <div className="whitespace-pre-wrap ">
      <div className="font-[yekanRe] text-4xl mr-2 md:text-6xl lg:mr-10 lg:text-6xl leading-10 xl:text-7xl font-bold">
        {header}
      </div>
      <div className="w-full border-y-[1px] border-black mt-6 lg:mt-8 flex justify-center md:block">
        <div className="text-justify text-lg mx-7 px-2 py-2 h-full border-x-[1px] md:border-l-0 border-black lg:mr-6 lg:w-1/2 font-[sahel] font-bold whitespace-pre-wrap leading-7">
          {text}
        </div>
      </div>
    </div>
  );
};

export default About;
