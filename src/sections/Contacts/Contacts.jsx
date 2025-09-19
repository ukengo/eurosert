import { Image } from 'minista'
import './Contacts.scss'
import clsx from 'clsx'
import Contactform from '@/components/Contactform'
import Icon from '@/components/Icon'
import Socials from '@/components/Socials'

export default () => {
  const contacts = [
    {
      icon: 'contact-mail',
      text: 'info@globalcert.com',
      href: 'info@globalcert.com',
    },
    {
      icon: 'contact-phone',
      text: '+380 44 123 45 65',
      href: '+380441234565',
    },
    {
      icon: 'contact-location',
      text: 'Київ, Україна',
      href: null,
    },
  ]


  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__content">
            <h1 className="contacts_title">
              Contact us
            </h1>
            <div className="contacts__description">
              Get professional advice on certifying your products
            </div>
            <ul className="contacts__text">
              {
                contacts.map(({ icon, text, href }, index) => (
                  <li className="contacts__item" key={index}>
                    <div className="contacts__icon">
                      <Icon className="contacts__svg" name={icon} hasFill />
                    </div>
                    <a href={href} className="contacts__link">
                      {text}
                    </a>
                  </li>
                ))
              }
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
    </section >
  )
}
