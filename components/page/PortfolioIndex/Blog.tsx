import Link from "next/link";
import { useRouter } from "next/router";
import { kill } from "process";
import React, { FC } from "react";

interface CardType {
  category?: string;
  title: string;
  explain?: string;
  color?: string;
}

export const BlogCard: FC<CardType> = ({ category, title, explain, color }) => {
  return (
    <div
      className="m-5 shadow-gray-500 shadow-md p-5 bg-gray-100 border-t-4 "
      style={{ borderColor: color }}
    >
      <div>{category}</div>
      <div>{title}</div>
      <div>{explain}</div>
    </div>
  );
};

export const BlogColumn: FC<{ array: CardType[] }> = ({ array }) => (
  <div className="flex flex-col">
    {array.map((item: CardType, index) => (
      <BlogCard {...item} key={index} />
    ))}
  </div>
);

interface BlogType {
  blogArray: CardType[];
}

const Blog: FC<BlogType> = ({ blogArray }) => {
  const router = useRouter();
  let column1: CardType[] = [];
  let column2: CardType[] = [];
  let column3: CardType[] = [];

  (() => {
    const _blogArray = [...blogArray];
    while (_blogArray.length) {
      column1.push({ ..._blogArray.shift() });
      _blogArray.length && column2.push(_blogArray.shift());
      _blogArray.length && column3.push(_blogArray.shift());
    }
  })();

  return (
    <div className="relative flex items-center flex-col">
      <div className="absolute text-[11rem] m- opacity-20 scale-y-50 -z-10 font-[elham] right-10 -top-32 md:-top-96">
        بلاگ‌ها
      </div>
      <div className="flex justify-center flex-col lg:flex-row">
        <BlogColumn array={column1} />
        <BlogColumn array={column2} />
        <BlogColumn array={column3} />
      </div>
      <Link href={`/${router.query.portfolioName}/blog`}>
        <a className="px-5 py-3  font-[yekanRe] font-bold text-lg hover:text-gray-800 mt-5">
          همه بلاگ‌ها ...
        </a>
      </Link>
    </div>
  );
};

export default Blog;
