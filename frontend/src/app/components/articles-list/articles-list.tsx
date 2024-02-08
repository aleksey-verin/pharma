import Image from 'next/image'
import './articles-list.scss'
import Link from 'next/link'
import { ArticleList } from './types'
import ArticlesListItem from './articles-list-item'

const ArticlesList = async () => {

  const reqUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/articlemnews?populate[2]=ImageBlock&fields[0]=title&fields[1]=Description`
  const headersList = {
    "Authorization": `bearer ${process.env.TOKEN}`,
   }
   
   let request = await fetch(reqUrl, { 
     method: "GET",
     headers: headersList
   });
  const articles = await request.json() as ArticleList

  // http://localhost:1337/api/articlemnews?populate[2]=ImageBlock&fields[0]=title&fields[1]=Description

  return (
    <section className='articles' id='articles'>
      <div className='articles__container container'>
        <h2 className='articles__title'>Статьи</h2>
        <div className='articles__list'>
          {articles.data.map((article) => (
            <ArticlesListItem
              key={article.id}
              id={article.id}
              title={article.attributes.Title}
              description={article.attributes.Description}
              image={article.attributes.ImageBlock.data.attributes.url}
            />
          ))}
        </div>
        <div className='articles-pagination'>
          <button className='articles-pagination__button'>Показать больше</button>
        </div>
      </div>
    </section>
  )
}

export default ArticlesList
