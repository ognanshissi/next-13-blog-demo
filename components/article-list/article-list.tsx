import ArticleItem from "../article-item/article-item";
import {ArticleModel} from "../../lib/models/article.model";

export interface ArticleListProps {
    articles: ArticleModel[]
}

export default function ArticleList ({articles}: ArticleListProps) {

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
          {articles.map((item, key) => (
              <ArticleItem  article={item} key={key}/>
          ))}
      </div>
    </>
  )
}
