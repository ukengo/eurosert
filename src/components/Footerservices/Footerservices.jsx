import SERVICES_KARDS from '@/constants/ServicesCards'
import './FooterServices.scss'
import { FOOTER_SERVICES_TITLE } from '@/constants/others'

export default () => {
  return (
    <div className="footer-services">
      <div className="footer-services__title footer-title">{FOOTER_SERVICES_TITLE}</div>
      <ul className="footer-services__items footer-text">
        {SERVICES_KARDS.map(({ title }, item) => (
          <li className="footer-services__item" key={item}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}
