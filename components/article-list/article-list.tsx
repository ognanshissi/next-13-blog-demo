import Link from "next/link";
import ArticleItem from "../article-item/article-item";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  return res.json();
} 


export default async function ArticleList () {

  const posts: any[] = await getData();

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {posts.map((item, key) => (
            <ArticleItem  article={item} key={key}/>
        ))}
      </div>
    </>
  )
}