import React from "react";

const Itag: React.FC<{ text: string }> = ({ children, text }) => {
  const style: string = "text-right opacity-60 font-[league] font-normal";
  return (
    <>
      {" "}
      <i dir="ltr" className={style}>{`<${text}>`}</i>
      <div className="mr-4 mb-4 md:mr-6 ">{children}</div>
      <i dir="ltr" className={style}>{`</${text}>`}</i>
    </>
  );
};
export default Itag;
