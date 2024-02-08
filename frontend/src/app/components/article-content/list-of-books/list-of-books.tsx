'use client'
import { Content } from '@/app/articles/[slug]/types'
import Markdown from 'react-markdown'
import { useState } from 'react'

const ListOfBooks = ({ item, key }: { item: Content, key: number }) => {
  const [listOpen, setListOpen] = useState(false)

  if (!item.Content) return null

  return (
    <div key={key} className='text-container'>
      <h5>{item.Title}</h5>
      <div className={`list-books ${listOpen ? 'open' : ''}`}>
        <Markdown>{item.Content}</Markdown>
      </div>
      <button onClick={() => setListOpen(!listOpen)} className='toggle-book-list'>
        {listOpen ? 'Скрыть список' : 'Подробнее'}
      </button>
    </div>
  )
}

export default ListOfBooks
