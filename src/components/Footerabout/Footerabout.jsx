import { FOOTER_ABOUT_TEXT } from '@/constants/others'
import './FooterAbout.scss'

export default () => {
  return (
    <div className="footer-about">
      <div className="footer-about__title footer-title">GCG</div>
      <div className="footer-about__text footer-text">
        <p>{FOOTER_ABOUT_TEXT}</p>
      </div>
    </div>
  )
}
