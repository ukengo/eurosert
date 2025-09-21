import './StepCard.scss'
import IconCardRed from '../IconCardRed'

export default (props) => {
  const { iconName, title, description } = props

  return (
    <div className="step-card">
      <div className="step-card__icon">
        <IconCardRed iconRedName={iconName} />
      </div>
      <div className="step-card__content">
        <div className="step-card__title">{title}</div>
        <div className="step-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
