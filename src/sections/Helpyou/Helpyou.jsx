import Contactform from '@/components/Contactform'
import './Helpyou.scss'
import { HELPYOU_TITLE, HELPYOURS } from '@/constants/others'

export default () => {
  
  return (
    <section className="helpyou" aria-labelledby="services-title">
      <div className="helpyou__inner container">
        <div className="helpyou__content">
          <div className="helpyou__text">
            <h5 className="helpyou__title">{HELPYOU_TITLE}</h5>
            <ul className="helpyou__items">
              {HELPYOURS.map((helpyou, index) => (
                <li className="helpyou__item" key={index}>
                  {helpyou}
                </li>
              ))}
            </ul>
          </div>
          <div className="helpyou__contactform">
            <Contactform />
          </div>
        </div>
      </div>
    </section>
  )
}
