import Image from 'next/image'
import './header.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
    <div className="header__container container">
        <a className="header__logo" href="/">
            <picture>
              <Image src="/assets/img/logo.png" alt="logo" width={93} height={30} />
            </picture>
        </a>
        <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link className="nav__link" href="/">
                    Что такое акне?
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="/">
                    Лечение
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="/">
                    Найти врача
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="/articles">
                    Статьи
                </Link>
              </li>
            </ul>
        </nav>
        <button type="button" className="header__burger">
            <span></span>
        </button>
    </div>
</header>
  )
}

export default Header 