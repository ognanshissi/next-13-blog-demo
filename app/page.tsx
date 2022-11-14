import { Suspense } from "react";
import ArticleList from "../components/article-list/article-list";
import Spinner from "../components/spinner/spinner";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-6xl font-bold text-teal-700 border-b-8 pb-4 border-b-teal-700 inline-block mb-4">Recent blog posts</h1>
      {/* Posts */}
      <Suspense fallback={<Spinner/>}>
        <ArticleList />
      </Suspense>
    </div>
  )
}
