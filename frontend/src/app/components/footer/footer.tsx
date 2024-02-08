import Image from 'next/image'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__disclaimer'>
          <picture>
            <source media="(max-width: 767px)" srcSet="/assets/img/footer-disclaimer-mobile.svg"/>
                <Image src="/assets/img/footer-disclaimer.svg" alt="" width={1125} height={56}/>
          </picture>
        </div>
        <div className='footer__top'>
          <a className='footer__logo-acnenet'>
            <Image src="/assets/img/footer-logo-1.png" alt="" width={93} height={26}/>
          </a>
          <div className='footer__nav'>
            <a className='footer__link' href='./user-agreement.html'>
              Пользовательское соглашение
            </a>
            <a className='footer__link' href='./confidentiality.html'>
              Политика в отношении обработки персональных данных
            </a>
            <a className='footer__link' href='./cookie.html'>
              Политика cookie
            </a>
            <a className='footer__link' href='./contacts.html'>
              Контакты
            </a>
          </div>
        </div>
        <div className='footer__bottom'>
          <a className='footer__logo-galderma'>
            <Image src="/assets/img/footer-logo-galderma.png" alt="" width={142} height={39}/>
          </a>
          <div className='footer__info'>
            <p className='footer__text'>ООО «Галдерма»</p>
            <a className='footer__link' href='#' target='_blank'>
              www.galderma.ru
            </a>
          </div>
        </div>
        <div className='footer__sources'>
          <p>
            1. Клинические рекомендации. Акне вульгарные. Российское общество дерматовенерологов
            и&nbsp;косметологов, 2020&nbsp;г.{' '}
            <a href='https://www.rodv.ru/klinicheskie-rekomendacii/' target='_blank'>
              https://www.rodv.ru/klinicheskie-rekomendacii/
            </a>
          </p>
          <p>
            2. Leyden J. A&nbsp;review of&nbsp;the use of&nbsp;combination therapies for the
            treatment of&nbsp;acne vulgaris. J.&nbsp;Am. Acad. Dermatol.&nbsp;2003;49:200&mdash;10
          </p>
          <p>
            3. Аравийская Е.Р., Самцов А.В. Акне и&nbsp;розацеа&nbsp;&mdash; М.: ООО
            &laquo;ФАРМТЕК&raquo;, 2021. &mdash;&nbsp;400&nbsp;с
          </p>
          <p>4. Dawson AL&nbsp;&amp;&nbsp;Dellavalle RP. BMJ 2013;346:f2634</p>
          <p>
            5. US&nbsp;Department of&nbsp;Health and Human Services FDA CDER. Guidance for Industry.
            Acne Vulgaris: Developing Drugs for Treatment. Available&nbsp;at:{' '}
            <a href='https://www.fda.gov/' target='_blank'>
              http://www.fda.gov/
            </a>
          </p>
          <p>6. Moradi Tuchayi&nbsp;S, et&nbsp;al. Nat Rev Dis Primers 2015;1:15029</p>
          <p>
            7. Pawin H, Beylot C, Chivot M&nbsp;et al. Creation of&nbsp;a&nbsp;tool to&nbsp;assess
            adherence to&nbsp;treatments in&nbsp;acne. Dermatology 2009; 218: 26&ndash;32
          </p>
          <p>
            8. Dreno&nbsp;B, et&nbsp;al. On&nbsp;behalf of&nbsp;the Global Alliance to&nbsp;improve
            outcomes in&nbsp;acne. Evaluation of&nbsp;the prevalence, risk factors, clinical
            characteristics, and burden of&nbsp;acne scars among active acne patients who have
            consulted a&nbsp;dermatologist in&nbsp;Brazil, France and the USA. Poster
            presented&nbsp;at: 23rd EADV&nbsp;Congress, 2014
          </p>
          <p>
            9. Tan&nbsp;J, et&nbsp;al. Prevalence and risk factors of&nbsp;acne scarring among
            patients consulting dermatologists in&nbsp;the Unites States. J&nbsp;Drugs Dermatol
            2017;16(2):97&mdash;102
          </p>
          <p>
            10. Gieler&nbsp;U, et&nbsp;al. J&nbsp;Eur Acad Dermatol Venereol 2015;29(Suppl
            4):12&mdash;14.
          </p>
          <p>11. Ayer J&nbsp;&amp;&nbsp;Burrows N. Postgrad Med J&nbsp;2006;82:500&mdash;506</p>
          <p>
            12. Бутарева&nbsp;М.&nbsp;М., Знаменская&nbsp;Л.&nbsp;Ф., Каппушева&nbsp;И.&nbsp;А.,
            Спиридонова&nbsp;Е.&nbsp;В., Егорова Ю.&nbsp;Ю. Принципы комбинированной терапии акне //
            Вестник дерматологии и&nbsp;венерологии.&nbsp;2011. &#8470;&nbsp;6. С. 13&ndash;17
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
