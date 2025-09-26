import { POPUP_TEXT, POPUP_TITLE } from '@/constants/others'
import './Popup.scss'
import Button from '../Button'

export default () => {
  return (
    <dialog className="popup" id="popup">
      <div className="popup__content">
        {POPUP_TITLE && <h5 className="popup__title">{POPUP_TITLE}</h5>}
        {POPUP_TEXT && <p className="popup__text"> {POPUP_TEXT} </p>}
        <Button className="popup__button button--primary-small" data-js-close>
          X
        </Button>
      </div>
    </dialog>
  )
}
