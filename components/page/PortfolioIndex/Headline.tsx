import React from "react";

interface Props {
  headlineText?: string;
  headlineSupport?: string;
}

const Headline: React.FC<Props> = (props) => {
  if (props)
    return (
      <div className="flex flex-col justify-center font-[yekanRe] font-bold">
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl whitespace-pre my-6">
          {props.headlineText}
        </h1>
        <h2 className="text-xl whitespace-pre">{props.headlineSupport}</h2>
      </div>
    );
  else null;
};

Headline.defaultProps = {
  headlineText: "just for test headlineText",
  headlineSupport: "just for test headlineSupport",
};
export default Headline;
