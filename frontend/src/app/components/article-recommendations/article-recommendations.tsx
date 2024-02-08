'use client'
import Image from 'next/image'
import './article-recommendations.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import { ArticleList } from '../articles-list/types'
import Link from 'next/link'

const ArticleRecommendation = ({
  articlesList,
  currentArticleSlug,
}: {
  articlesList: ArticleList
  currentArticleSlug: string
}) => {
  const slidesWithoutCurrent = articlesList.data.filter(
    (article) => article.id !== +currentArticleSlug
  )
  const slides = slidesWithoutCurrent.map((article) => (
    <SwiperSlide key={article.id} className='article-recommendation__slide'>
      <Link href={`/articles/${article.id}`} className='article-recommendation__link'>
        <h3 className='article-recommendation__caption'>{article.attributes.Title}</h3>
        <p className='article-recommendation__description'>{article.attributes.Description}</p>
        <div className='article-recommendation__image'>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.ImageBlock.data.attributes.url}`}
            alt=''
            width={301}
            height={300}
          />
        </div>
      </Link>
    </SwiperSlide>
  ))

  return (
    <section className='article-recommendation' id='article-recommendation'>
      <div className='article-recommendation__container container'>
        <div className='article-recommendation__header'>
          <h2 className='article-recommendation__title'>Вам может быть интересно</h2>
          <div className='article-recommendation__wrapper-arrow'>
            <div className='article-recommendation__arrow-prev'>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.25 17L1.25 9L9.25 1' stroke='#2D1448' />
              </svg>
            </div>
            <div className='article-recommendation__arrow-next'>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0.5 1L8.5 9L0.499999 17' stroke='#2D1448' />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          className='article-recommendation__swiper'
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: '.article-recommendation__arrow-prev',
            nextEl: '.article-recommendation__arrow-next',
          }}
        >
          {slides}
        </Swiper>
      </div>
    </section>
  )
}

export default ArticleRecommendation
