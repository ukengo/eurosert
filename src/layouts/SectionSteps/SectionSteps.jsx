import './SectionSteps.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    classNameMod,
    title,
    titleId,
    description,
    image,
    buttonText,
    buttonHref,
    children,
  } = props

  return (
    <section
      className={clsx(className, 'section-steps', 'container', classNameMod)}
      aria-labelledby={titleId}
    >
      <div className={clsx('section-steps__content', className + '__content')}>
        <header
          className={clsx(className + '__header section__header')}
          data-js-section-header="section-steps__header"
        >
          {title && (
            <h2 className={clsx(className + '__title', 'h3')} id={titleId}>
              {title}
            </h2>
          )}
          {description && (
            <div className={clsx(className + '__description')}>
              <p>{description}</p>
            </div>
          )}
        </header>
        <div className={clsx(className + '__body')}>{children}</div>
      </div>
      <div className={clsx('section-steps__picture', className + '__picture')}>
        <Image
          src={image}
          className={clsx('section-steps__image', className + '__image')}
        />
        {buttonText && (
          <div className="section-steps__link">
            <Button
              className={clsx(
                'section-steps__button',
                className + '__button',
                'button--primary'
              )}
              href={buttonHref}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
