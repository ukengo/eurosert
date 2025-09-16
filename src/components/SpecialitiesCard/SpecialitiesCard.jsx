import Icon from '@/components/Icon'
import './SpecialitiesCard.scss'

export default (props) => {

  const {
    iconName,
    text,
    href,
  } = props

  return (
    <a href={href} className="specialities-card">
      <div className="specialities-card__icon">
        <Icon className="specialities-card__svg" name={iconName}  hasFill />
      </div>
      <p className="specialities-card__text">{text}</p>
    </a>
  )
}