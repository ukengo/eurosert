import HowworkCard from '@/components/HowworkCard'
import './Howwork.scss'
import clsx from 'clsx'

export default ({ title, subtitle, howWorkCards }) => {
  return (
    <section className="howwork" aria-labelledby="howwork-title">
      <div className="howwork__inner container">
        <div className="howwork__header">
          <h2 className="howwork__title title-h2">{title}</h2>
          <div className="howwork__subtitle">
            {subtitle}
            <p></p>
          </div>
          <div
            className={clsx(
              'howwork__cards',
              'howwork__cards--' + howWorkCards.length
            )}
          >
            {howWorkCards.map(({ title, description }, index) => (
              <HowworkCard
                title={title}
                description={description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
