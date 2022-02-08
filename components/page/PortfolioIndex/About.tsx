import React from "react";

interface Types {
  header: string;
  text: string;
}

const About: React.FC<Types> = ({ header, text }) => {
  return (
    <div className="whitespace-pre-wrap mx-4 lg:mr-12">
      <div className="font-[yekanRe] text-4xl md:text-6xl lg:text-6xl leading-10 xl:text-7xl font-bold">
        {header}
      </div>
      <div className="text-justify text-xl mr-2 ml-7 mt-6 lg:mt-8 lg:mr-6 lg:w-1/2 font-[elham] font-bold whitespace-pre-wrap leading-7">
        {text}
      </div>
    </div>
  );
};

export default About;
