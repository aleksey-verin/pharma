import Image from 'next/image'
import './article-content.scss'
import { Article } from '@/app/articles/[slug]/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ListOfBooks from './list-of-books/list-of-books'

const ArticleContent = ({ article }: { article: Article }) => {
  const { Title, Description, Subtitle, ImageBlock, Content } = article.data.attributes

  console.log('article');

  const mainContent = Content.map((item, index) => {
    switch (item.__component) {
      case 'content-for-article.paragraf':
        if (item.content) {
          return (
            <div key={index} className='text-container'>
              <MDXRemote source={item.content} />
            </div>
          )
        }
      case 'content-for-article.bolshoe-izobrazhenie':
        if (item.image) {
          return (
            <div  key={index} className='image-container'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image.data.attributes.url}`}
                alt='picture'
                width={1131}
                height={600}
              />
            </div>
          )
        }
      case 'content-for-article.dva-izobrazheniya':
        if (item.image1 && item.image2) {
          return (
            <div  key={index} className='image-block'>
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image1.data.attributes.url}`}
                  alt='image'
                  width={389.5}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image2.data.attributes.url}`}
                  alt='image'
                  width={389.5}
                  height={500}
                />
              </div>
            </div>
          )
        }
      case 'content-for-article.spisok-literatury':
        if (item.Title && item.Content) {
          return <ListOfBooks key={index} item={item} />
        }
      default:
        break
    }
  })

  return (
    <>
      <section className='article-promo'>
        <div className='article-promo__container container'>
          <Image
            className='article-promo__image'
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${ImageBlock.data.attributes.url}`}
            alt=''
            width={497}
            height={457}
          />
          <div className='article-promo__text'>
            <h2 className='article-promo__title'>{Title}</h2>
            <MDXRemote source={Description} />
          </div>
        </div>
      </section>
      <section className='article-heading'>
        <div className='container'>
          <MDXRemote source={Subtitle} />
        </div>
      </section>
      <section className='article-content wide'>
        <div className='container'>
          {mainContent}
        </div>
      </section>
    </>
  )
}

export default ArticleContent
