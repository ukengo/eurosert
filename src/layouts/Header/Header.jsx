import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'
import Dropdown from '@/components/Dropdown'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
      dropdown: null,
    },
    {
      label: 'Certifications',
      href: '/european',
      dropdown: null,
      /* dropdown: [
        { label: 'European Certification', href: 'european' },
        { label: 'Worldwide Conformity & Certification', href: 'worldwide' },
        { label: 'Private Certifications', href: 'private' },
        { label: 'Certification Services', href: 'certservices' },
      ], */
    },
    {
      label: 'CE Marking',
      href: '/cemarking',
      dropdown: null,
    },
    {
      label: 'ISO Standards',
      href: '/iso',
      dropdown: null,
    },
    {
      label: 'Contacts',
      href: '/contacts',
      dropdown: null,
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
              {menuItems.map(({ label, href, dropdown }, index) => (
                <li
                  className={clsx(
                    'header__menu-link', dropdown && 'header__menu-link--dropdown'
                  )} key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                  >
                    {label}
                  </a>
                  {dropdown && <Dropdown items={dropdown} />}
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