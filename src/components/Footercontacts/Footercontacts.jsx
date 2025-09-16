import CONTACTS from "@/constants/Contacts"
import './Footercontacts.scss'

export default () => {
  return (
    <div className="footer-contacts">
      <div className="footer-contacts__title footer-title">
        Contacts
      </div>
      <ul className="footer-contacts__items footer-text">
        {CONTACTS.phones.map(({ phone, phonelink }, phoneIndex) => (
          <li className="footer-contacts__item" key={`phone-${phoneIndex}`}>
            <a
              className="footer-contacts__link"
              href={`tel:${phonelink}`}
            >
              {phone}
            </a>
          </li>
        ))}
        {CONTACTS.emails.map(({ email, emaillink }, emailIndex) => (
          <li className="footer-contacts__item" key={`email-${emailIndex}`}>
            <a
              className="footer-contacts__link"
              href={`mailto:${emaillink}`}
            >
              {email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}