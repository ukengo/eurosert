import './HowworkCard.scss'

export default (props) => {
  const { title, description } = props

  return (
    <div className="howwork-card">
      <h3 className="howwork-card__title">{title}</h3>
      <div className="howwork-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}
