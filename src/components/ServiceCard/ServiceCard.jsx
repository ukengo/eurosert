import Icon from '@/components/Icon'
import './ServiceCard.scss'

export default (props) => {

  const {
    iconName,
    title,
    description,
  } = props

  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Icon className="service-card__svg" name={iconName} hasFill />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  )
}