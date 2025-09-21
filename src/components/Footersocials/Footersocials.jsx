import Socials from '@/components/Socials'
import './Footersocials.scss'

export default () => {
  return (
    <div className="footer-socials">
      <div className="footer-socials__title footer-title"></div>
      <div className="footer-socials__items footer-text">
        <Socials />
      </div>
    </div>
  )
}
