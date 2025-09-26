import './Contacts.scss'
import Contactform from '@/components/Contactform'
import Icon from '@/components/Icon'
import Socials from '@/components/Socials'
import {
  CONTACTS,
  CONTACTS_DESCRIPTION,
  CONTACTS_TITLE,
} from '@/constants/others'

export default () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__content">
            <h1 className="contacts_title">{CONTACTS_TITLE}</h1>
            <div className="contacts__description">{CONTACTS_DESCRIPTION}</div>
            <ul className="contacts__text">
              {CONTACTS.map(({ icon, text, href }, index) => (
                <li className="contacts__item" key={index}>
                  <div className="contacts__icon">
                    <Icon className="contacts__svg" name={icon} hasFill />
                  </div>
                  <a href={href} className="contacts__link">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contacts__socials">
              <Socials />
            </div>
          </div>
          <div className="contacts__form">
            <Contactform />
          </div>
        </div>
      </div>
    </section>
  )
}
