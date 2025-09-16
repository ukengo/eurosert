import FooterAbout from '@/components/Footerabout'
import FooterServices from '@/components/Footerservices'
import FooterContacts from '@/components/Footercontacts'
import Footersocials from '@/components/Footersocials'
import './Footer.scss'

export default () => {
  const footerItems = [
    <FooterAbout key="about" />,
    <FooterServices key="services" />,
    <FooterContacts key="contacts" />,
    <Footersocials key="footersocials" />,
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__items">
          {footerItems.map((Item, index) => (
            <div className="footer__item" key={index}>
              {Item}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2025 Global Compliance Group. All rights reserved.</p>
      </div>
    </footer>
  )
}