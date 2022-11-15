import {Suspense} from "react";

import ArticleList from "../components/article-list/article-list";
import {ArticleModel} from "../lib/models/article.model";
import Spinner from "../components/spinner/spinner";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
    return res.json();
}

export default async function Home() {
    const articles: ArticleModel[] = await getData();

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-6xl font-bold text-teal-700 border-b-8 pb-4 border-b-teal-700 inline-block mb-4">Recent blog posts</h1>
                {/* Posts */}
                <Suspense fallback={<Spinner/>}>
                    <ArticleList articles={articles}/>
                </Suspense>
            </div>
        </>
  )
}
