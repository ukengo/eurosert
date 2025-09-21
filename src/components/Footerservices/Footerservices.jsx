import SERVICESKARDS from '@/constants/ServicesCards'
import './FooterServices.scss'

export default () => {
  return (
    <div className="footer-services">
      <div className="footer-services__title footer-title">Services</div>
      <ul className="footer-services__items footer-text">
        {SERVICESKARDS.map(({ title }, item) => (
          <li className="footer-services__item" key={item}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}
