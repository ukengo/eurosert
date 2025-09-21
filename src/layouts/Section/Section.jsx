import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    classNameMod,
    classNameGrid,
    title,
    titleId,
    description,
    children,
  } = props

  return (
    <section
      className={clsx(className, 'section', 'container', classNameMod)}
      aria-labelledby={titleId}
    >
      {title && (
        <header
          className={clsx(className + '__header section__header')}
          data-js-section-header="section__header"
        >
          <h2
            className={clsx(className + '__title', 'section__title', 'h3')}
            id={titleId}
          >
            {title}
          </h2>
          {description && (
            <div
              className={clsx(
                className + '__description',
                'section__description'
              )}
            >
              <p>{description}</p>
            </div>
          )}
        </header>
      )}
      <div
        className={clsx(className + '__body', 'section__body', classNameGrid)}
      >
        {children}
      </div>
    </section>
  )
}
