import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Certifications',
      href: '/about',
    },
    {
      label: 'ISO Standards',
      href: '#',
    },
    {
      label: 'Contacts',
      href: '#',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}