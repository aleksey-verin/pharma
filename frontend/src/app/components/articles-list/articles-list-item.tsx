import Image from 'next/image'
import './articles-list.scss'
import Link from 'next/link'

const ArticlesListItem = ({title, description, image, id}:{title: string, description: string, image: string, id: number}) => {
  return (
    <Link href={`/articles/${id}`} className='articles__block'>
      <div className='articles__content'>
        <h3 className='articles__content-title'>{title}</h3>
        <p className='articles__content-text'>
          {description}
        </p>
      </div>
      <div className='articles__image'>
        <picture>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`} alt='' width={302} height={300} />
        </picture>
      </div>
    </Link>
  )
}

export default ArticlesListItem
