import './ServiceCard.scss'
import IconCardRed from '../IconCardRed'

export default (props) => {
  const { iconName, title, descriptions } = props

  return (
    <div className="service-card">
      <IconCardRed iconRedName={iconName} />
      <h3 className="service-card__title">{title}</h3>
      {descriptions.map((description, item) => (
        <div className="service-card__description" key={item}>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
