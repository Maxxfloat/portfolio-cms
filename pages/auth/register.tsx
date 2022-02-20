import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center font-[yekanRe] ">
      <div className="text-4xl md:text-5xl leading-relaxed">
        وب سایت در حال توسعه است و همینک نمی‌توان ثبت نام کرد
      </div>
      <Link href={"/"} passHref>
        <button className="border-2 border-black dark:border-white px-5 py-3 m-10">
          بازگشت
        </button>
      </Link>
    </div>
  );
};

export default Login;
