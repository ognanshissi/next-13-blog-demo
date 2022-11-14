"use client";

import Link from "next/link";


export interface ArticleItemProps {
  article: {
    id: string;
    body: string;
    title: string
  }
}

export default function ArticleItem({article}: ArticleItemProps) {
  return (
    <>
    <div className="border border-steal-500 rounded-lg p-4 shadow hover:shadow-lg hover:cursor-pointer post">
        <Link href={`article/${article.id}`}>
          <div className="text-teal-700 font-extrabold text-xl hover:underline post__title">{ article.title } &rarr;</div>
          <div>{ article.body }</div>
        </Link>
    </div>
    </>
  );
}