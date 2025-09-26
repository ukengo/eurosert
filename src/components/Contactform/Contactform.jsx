import Button from '@/components/Button'
import './Contactform.scss'
import {
  CONTACTFORM_BUTTON,
  CONTACTFORM_LABEL_PHONE,
  CONTACTFORM_LABEL_EMAIL,
  CONTACTFORM_LABEL_MESSAGE,
  CONTACTFORM_LABEL_NAME,
  CONTACTFORM_TITLE,
} from '@/constants/others'
import Popup from '../Popup'

export default () => {
  return (
    <>
      <div className="contactform" aria-labelledby="services-title">
        <h5 className="contactform__title">{CONTACTFORM_TITLE}</h5>
        <form
          className="contactform__body contact-form"
          data-action="sendmail.php"
          method="POST"
          data-ajax
          data-popup-message="popup"
        >
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="name">
              {CONTACTFORM_LABEL_NAME}
            </label>
            <input
              className="contactform__input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="phone">
              {CONTACTFORM_LABEL_PHONE}
            </label>
            <input
              className="contactform__input"
              type="phone"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="email">
              {CONTACTFORM_LABEL_EMAIL}
            </label>
            <input
              className="contactform__input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="message">
              {CONTACTFORM_LABEL_MESSAGE}
            </label>
            <textarea
              className="contactform__textarea"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <Button className="contactform__button button--primary" type="submit">
            {CONTACTFORM_BUTTON}
          </Button>
        </form>
      </div>
      <Popup />
    </>
  )
}
