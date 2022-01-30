import React from "react";

interface Props {
  headlineText?: string;
  headlineSupport?: string;
}

const Headline: React.FC<Props> = (props) => {
  if (props)
    return (
      <div>
        <h1>{props.headlineText}</h1>
        <h2>{props.headlineSupport}</h2>
      </div>
    );
  else null;
};

export default Headline;
