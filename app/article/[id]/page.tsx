import Head from "../../head";
import Link from 'next/link';
import { ArticleModel } from "@lib/models";

async function getPostDetail(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {});
  return res.json();
}

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {

  const article: ArticleModel = await getPostDetail(params.id)

  return (
    <>
      <Head title={article.title} description={article.body} />
      <div className="pt-8 flex">
        <div className="w-2/3">
          <h1 className="text-teal-700 font-extrabold text-6xl pb-6">{article.title}</h1>
          <div className="text-lg pb-4">
            {article.body}
          </div>
          <hr />

          <div className="text-black font-semibold pt-4">
            <Link href={'/'}>Go Back</Link>
          </div>
        </div>
      </div>
    </>
  )
}
