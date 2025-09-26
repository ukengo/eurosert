import Button from '@/components/Button'
import './Hero.scss'
import clsx from 'clsx'
import {
  HERO_BUTTONS_LINKS,
  HERO_SUBTITLE,
  HERO_TITLE,
} from '@/constants/others'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <h1 className="hero__title">{HERO_TITLE}</h1>
          <p className="hero__subtitle">{HERO_SUBTITLE}</p>
          <div className="hero__buttons">
            {HERO_BUTTONS_LINKS.map(({ className, href, text }, index) => (
              <Button
                className={clsx('hero__button', className)}
                href={href}
                key={index}
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
