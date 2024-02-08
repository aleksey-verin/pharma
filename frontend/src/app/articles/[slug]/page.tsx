import ArticleContent from "@/app/components/article-content/article-content"
import ArticleRecommendation from "@/app/components/article-recommendations/article-recommendations"
import { Article } from "./types"
import { ArticleList } from "@/app/components/articles-list/types"

const Article1 = async ({params}: {params: {slug: string}}) => {

  const reqUrlArticle = `${process.env.NEXT_PUBLIC_BASE_URL}/api/articlemnews/${params.slug}?fields[0]=Title&fields[1]=Description&fields[2]=Subtitle&populate[ImageBlock]=ImageBlock&populate[Content][populate]=*`
  const headersListArticle = {
    "Authorization": `bearer ${process.env.TOKEN}`,
   }
   
   let requestArticle = await fetch(reqUrlArticle, { 
     method: "GET",
     headers: headersListArticle
   });
  const article = await requestArticle.json() as Article

  const reqUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/articlemnews?populate[2]=ImageBlock&fields[0]=title&fields[1]=Description`
  const headersList = {
    "Authorization": `bearer ${process.env.TOKEN}`,
   }
   
   let request = await fetch(reqUrl, { 
     method: "GET",
     headers: headersList
   });
  const articlesList = await request.json() as ArticleList

  return (
   <>
   <ArticleContent article={article} />
   <ArticleRecommendation articlesList={articlesList} currentArticleSlug={params.slug}  />
   </>
  )
}

export default Article1 