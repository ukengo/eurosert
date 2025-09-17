import Button from '@/components/Button'
import './Hero.scss'
import clsx from 'clsx'

export default () => {
  const links = [
    {
      className: 'button--primary',
      href: '/contacts',
      text: 'Request a consultation',
    },
    {
      className: 'button--secondary',
      href: '#services',
      text: 'Discover more',
    },
  ]

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <h1 className="hero__title">
            Worldwide Product Conformity & Certification
          </h1>
          <p className="hero__subtitle">
            Professional support in certification for entering global markets
          </p>
          <div className="hero__buttons">
            {links.map(({ className, href, text }, index) => (
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
